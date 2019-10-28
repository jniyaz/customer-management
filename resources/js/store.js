export default {
    state: {
        welcomeMessage: 'Welcome to vue SPA App'
    },
    getters: {
        welcome(state) {
            return state.welcomeMessage;
        }
    },
    mutations: {},
    actions: {}
}
