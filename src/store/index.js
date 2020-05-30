import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        snippet: '',
        asides: [
            {
                title: 'My Sheet',
                hash: 'hgFHgc',
                body: '',
                parent: [],
                child: []
            }
        ],
        current: 'hgFHgc',
        local: ''
    },
    mutations: {
        update(state, s) {
            state.snippet = s;
        },
        addAside(state, h) {
            let r = Math.random().toString(36).substring(7);
            let aside = {
                title: state.snippet,
                hash: r,
                body: '',
                parent: [h],
                child: []
            }
            state.asides.push(aside);
            state.current = aside.hash;
            state.local = aside.body;
        },
        saveSheet(state, payload) {
            let cIdx = state.asides.findIndex(element => {
                return element.hash === payload.h;
            });
            state.asides[cIdx].body = payload.b;
            state.asides[cIdx].title = payload.t;
        }
    }
})

export default store;