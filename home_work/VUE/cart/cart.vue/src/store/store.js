
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict:true,
    state: {
        products: [
                { name: 'Lemon', price: 2},
                { name: 'Banana', price: 12},
                { name: 'Apple', price: 22},
        ]
    },
})