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
                cache: 'no-cache'
            })
                .then(response => response.json())

                .then( data => {context.commit('NEXT', data.next);
                                return data;})
                .then(data => {
                    
                    Promise.all(data.results.map(function(pokemon){
                      return  fetch(pokemon.url, {method: 'GET',cache: 'no-cache'})
                     }))
                    .then(responses => Promise.all(responses.map(r => r.json())))
                    .then(results => context.commit('ADD_POKEMONES', results))
                
                })
        },
        get_uno_pokemon: async (context, payload) => {
            context.commit('ISLOADED', true)
            fetch(context.state.baseURL + "/" + payload, {
                method: 'GET',
                cache: 'no-cache'
            })
            .then(response => response.json())
            .then(results => {
                context.commit('ADD_UNO_POKEMON', results)
            })
        }
    }
}