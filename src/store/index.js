import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        snippet: '',
        asides: [
            {
                title: 'This is a sheet'
            }
        ]        
    },
    mutations: {
        update(state, s) {
            state.snippet = s;
        },
        addAside(state) {
            state.asides.push({title: state.snippet});
        }
    }
})

export default store;