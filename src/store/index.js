import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todoList: []
  },
  mutations: {
    setTodo(state, todo) {
      state.todoList.push(todo);
    },
    toggleTodo(state, id) {
      let array = [];
      state.todoList.map((todo, idx) => {
        if (idx === id) {
          array.push({ text: todo.text, done: !todo.done });
        } else {
          array.push(todo);
        }
      });
    },
    deleteTodo(state, id) {
      state.todoList.splice(id, 1);
    }
  },
  getters: {
    todoList: state => state.todoList
  },
  actions: {
    setTodo({ commit }, todo) {
      commit("setTodo", todo);
    },
    toggleTodo({ commit }, id) {
      commit("toggleTodo", id);
    },
    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
    }
  }
});
