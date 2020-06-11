export default {
    state: {
        IsLoaded: false,
        pokemones: [],
        pokemon: {},
        next: '',
        baseURL: 'https://pokeapi.co/api/v2/pokemon'
    },
    mutations: {
        NEXT: (state, payload) => {
            state.next = payload;
        },
        ADD_POKEMONES: (state, payload) => {
            Array.prototype.push.apply(state.pokemones, payload);
            state.IsLoaded = false;
        },
        ADD_UNO_POKEMON: (state, payload) => {
            state.pokemon = payload;

        },
        ADD_UNO_INFO_SPECIES: (state, payload) => {
            let sp = payload.flavor_text_entries.filter(item => item.language.name == "en");
            payload.flavor_text_entries.length = 0;
            Array.prototype.push.apply(payload.flavor_text_entries, sp);
            let gn = payload.genera.filter(item => item.language.name == "en");
            payload.genera.length = 0;
            Array.prototype.push.apply(payload.genera, gn);
            state.pokemon.species = payload;

        },
        ADD_UNO_INFO_TYPES: (state, payload) => {
            state.pokemon.types.forEach(function (type, i) {
                type.types_relations = {};
                type.types_relations.damage_from = [];
                Array.prototype.push.apply(type.types_relations.damage_from, payload[i].damage_relations.double_damage_from.map(function (item) {
                    item.multiple = 2;
                    item.ind = i;
                    return item
                }));
                Array.prototype.push.apply(type.types_relations.damage_from, payload[i].damage_relations.half_damage_from.map(function (item) {
                    item.multiple = 0.5;
                    item.ind = i;
                    return item
                }));
                Array.prototype.push.apply(type.types_relations.damage_from, payload[i].damage_relations.no_damage_from.map(function (item) {
                    item.multiple = 0;
                    item.ind = i;
                    return item
                }));
            });

            state.pokemon.damage_rel = [];

            if (payload.length == 2) {
                state.pokemon.types[0].types_relations.damage_from.forEach(function (typeRel1) {
                    state.pokemon.types[1].types_relations.damage_from.forEach(function (typeRely) {
                        if (typeRel1.name == typeRely.name) {
                            typeRel1.multiple = typeRel1.multiple * typeRely.multiple;
                            typeRely.multiple = typeRel1.multiple
                            if (typeRel1.multiple == 4) {
                                if (!state.pokemon.damage_rel.includes(typeRel1)) {
                                    typeRel1.from = "FROM 4444"
                                    state.pokemon.damage_rel.push(typeRel1);
                                }
                            }
                        }
                    })
                });
                Array.prototype.push.apply(state.pokemon.damage_rel, state.pokemon.types[0].types_relations.damage_from.filter(type => {
                    return (
                        (type.multiple == 2) && (state.pokemon.damage_rel.find(function (item) {
                            return (type.name == item.name)
                        }, type) == undefined)
                    )
                }))
                Array.prototype.push.apply(state.pokemon.damage_rel, state.pokemon.types[1].types_relations.damage_from.filter(type => {
                    return (
                        (type.multiple == 2) && (state.pokemon.damage_rel.find(function (item) {
                           return (type.name == item.name)
                        }, type) == undefined)
                    ); 
                    
                }))
            } else {
                Array.prototype.push.apply(state.pokemon.damage_rel, state.pokemon.types[0].types_relations.damage_from.filter(type => {
                    return (type.multiple == 2)
                }))
            }
            state.IsLoaded = false;
        },
        ISLOADED: (state, payload) => {
            state.IsLoaded = payload
        },
        DESTROY: (state) => {
            state.pokemones.length = 0;
        },
        DESTROY_POKEMON: (state) => {
            state.pokemon = {}
        },
    },
    getters: {
        pokemones(state) {
            return state.pokemones
        },
        IsLoaded(state) {
            return state.IsLoaded
        },
        GET_UNO_POKEMON(state) {
            return state.pokemon
        }
    },
    actions: {
        get_pokemones: async (context, payload) => {
            context.commit('ISLOADED', true)
            console.log(context.state.baseURL + payload)
            fetch(context.state.baseURL + payload, {
                method: 'GET',
            
            })
                .then(response => response.json())

                .then(data => {
                    context.commit('NEXT', data.next);
                    return data;
                })
                .then(data => {

                    Promise.all(data.results.map(function (pokemon) {
                        return fetch(pokemon.url, { method: 'GET', })
                    }))
                        .then(responses => Promise.all(responses.map(r => r.json())))
                        .then(results => context.commit('ADD_POKEMONES', results))

                })
        },
        get_uno_pokemon: async (context, payload) => {
            context.commit('ISLOADED', true)
            fetch(payload, {
                method: 'GET',
            
            })
                .then(response => response.json())
                .then(results => {
                    context.commit('ADD_UNO_POKEMON', results);
                    return results;
                })
                .then(results => {
                    fetch(results.species.url, {
                        method: 'GET',
                    
                    })
                        .then(response => response.json())
                        .then(results => {
                            context.commit('ADD_UNO_INFO_SPECIES', results);
                        })
                    return results;
                })
                .then(results => {
                    Promise.all(results.types.map(function (type) {
                        return fetch(type.type.url, { method: 'GET', })
                    }))
                        .then(responses => Promise.all(responses.map(r => r.json())))
                        .then(results => context.commit('ADD_UNO_INFO_TYPES', results))
                })
        }
    }
}