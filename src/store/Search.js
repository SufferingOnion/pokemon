export default {
    state: {
        IsSearched: false,
        searched_pokemones: [],
        request: {},
        baseURL: 'https://pokeapi.co/api/v2/'
    },
    mutations: {
        IS_SEARCHED: (state, payload) => {
            state.IsSearched = payload
        },
        SET_SEARCHED_POKEMONES: (state, payload)=> {
            Array.prototype.push.apply(state.searched_pokemones, payload)

        },
        RESET_SEARCH: (state)=> {
            state.searched_pokemones.splice(0, state.searched_pokemones.length);
        },
        SET_REQUEST: (state, payload)=> {
            state.request = payload;
        }

    },
    getters: {
        searched_pokemones(state) {
            return state.searched_pokemones
        },
        IsSearched(state) {
            return state.IsSearched
        },
        request(state) {
            return state.request
        },
    },
    actions: {
        search_pokemones: async (context) => {
            context.commit('ISLOAD', true)
            Promise.all(Object.entries(context.state.request).map(function ([key, value]) {

                if (Array.isArray(value)) {
                    return Promise.all(value.map(function (type) {
                        return fetch(context.state.baseURL + key + "/" + type, {
                            method: 'GET',
                        })
                            .then(response => response.json())
                            .then(results => { return results.pokemon })
                    }))
                } else {
                    if (value != "") {
                        return {
                            pokemon: {
                                name: value,
                                url: context.state.baseURL + key + "/" + value,
                            }
                        }
                    } else {
                        return value
                    }
                }
            }))
                .then(responses => {

                    let [pokemon, types] = responses;
                    let arr = []
                    console.log([pokemon, types])
                    if (types.length > 1) {
                        arr = types[0].filter(firstType => {
                            return types[1].some(secondType => {
                                return secondType.pokemon.name == firstType.pokemon.name
                            })
                        })
                    } else if (types.length == 1) {
                        arr = types[0]
                    } else {
                        arr.length = 0
                    }

                    if (arr.length != 0 && pokemon != "") {
                        arr = arr.filter(type => {
                            return type.pokemon.name == pokemon.pokemon.name
                        })
                        console.log(arr)
                    } else if (pokemon != "") {
                        arr.push(pokemon)
                    }
                    arr = arr.map(pokeObj => {
                        return pokeObj.pokemon
                    })
                    console.log(arr)
                    Promise.all(arr.map(function (pokemon) {
                        return fetch(pokemon.url, { method: 'GET', })
                    }))
                        .then(responses => Promise.all(responses.map(r => r.json())))
                        .then(results => {
                            Promise.all(results.map(function (item) {
                                item.img = new Image();
                                item.img.src = item.sprites.front_default
                            }))
        
                            return results
                        })
                        .then(results => {
                            context.commit("RESET_SEARCH");
                            context.commit("IS_SEARCHED", true);
                            context.commit('SET_SEARCHED_POKEMONES', results)})
                            context.commit("ISLOAD", false);                    
                })


        },
    }
}