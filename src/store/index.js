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
        currentSheet: "mysheet",
        local: ''
    },
    mutations: {
        update(state, s) {
            state.snippet = s;
        },
        addAside(state, h) {
            let r = Math.random().toString(36).substring(7);
            let parent = state.asides.find(element => {
                return element.hash === h;
            });

            let aside = {
                title: state.snippet,
                hash: r,
                body: '',
                parent: [{title: parent.title, hash: parent.hash}],
                child: []
            }

            parent.child.push({title: aside.title, hash: aside.hash});
            
            state.asides.push(aside);
            state.current = aside.hash;
            state.local = aside.body;
            
            console.log(state.asides);
        },
        saveSheet(state, payload) {
            let cIdx = state.asides.findIndex(element => {
                return element.hash === payload.h;
            });
            state.asides[cIdx].body = payload.b;
            state.asides[cIdx].title = payload.t;
        },
        getSheet(state, h) {
            let s = state.asides.find(element => {
                return element.hash === h;
            });

            console.log(s);
            return s;
        }
    }
})

export default store;