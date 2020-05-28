export default {
    state: {
        IsLoaded: false,
        pokemones: [],
        next: '',
        baseURL: 'https://pokeapi.co/api/v2/pokemon'
    },
    mutations: {
        NEXT: (state, payload) => {
            state.next = payload;
        },
        ADD_POKEMONES: (state, payload) => {
            state.pokemones = state.pokemones.concat(payload);
            state.IsLoaded = true;
        },
        ISLOADED: (state, payload) => {
            state.IsLoaded = payload
        },
        DESTROY: (state) => {
            state.pokemones.splice(20, state.pokemones.length)
        }
    },
    getters: {
        pokemones(state) {
            return state.pokemones
        },
        IsLoaded(state) {
            return state.IsLoaded
        }
    },
    actions: {
        get_pokemones: async (context, payload) => {
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
    }
}