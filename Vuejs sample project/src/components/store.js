import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); // O.M. for the Vue instance
let store = new Vuex.Store({
    self: this,
    state: {
        todos: []
    },
    mutations: { // read/write operations on state
        // accepting new state reference with payload
        addTodo(state, todoText) {
            state.todos.push({
                text: todoText,
                done: false
            });
        },

        removeTodo(state, todo) {
            var index = state.todos.indexOf(todo);
            if (index >= 0) {
                state.todos.splice(index, 1);
            }
        },

        updateTodo(state, todo) {
            var index = state.todos.indexOf(todo);
            if (index >= 0) {
                state.todos[index] = todo;
            }
        },

        loadJSON(state, json) {
            state.todos = JSON.parse(json);
        }
    },
    getters: { // used to query store based on conditions
        doneTodos(state) {
            return state.todos.filter(todo => todo.done);
        },

        allTodos(state) {
            return state.todos;
        },

        toJSON(state) {
            return JSON.stringify(state.todos);
        }
    },
    actions:{
        // functions those make ajax calls
    }
});
export default store;