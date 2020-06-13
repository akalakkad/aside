import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        snippet: ''
        currentSheet: "mysheet"
    },
    mutations: {

    }
})

export default store;