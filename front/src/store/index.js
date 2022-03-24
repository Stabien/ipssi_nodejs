import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeworks: [],
    students: [],
    teachers: [],
    user: {}
  },
  getters: {
    homeworks(state) {
      return state.homeworks;
    },
    students(state) {
      return state.students;
    }
  },
  mutations: {
    initializeHomeworks(state, data) {
      state.homeworks = data;
    },
    initializeUsers(state, data) {
      state.teachers = data.filter(user => user.role === 'TEACHER');
      state.students = data.filter(user => user.role === 'STUDENT');
    }
  },
  actions: {
    async initializeHomeworks({ commit }) {
      try {
        const homeworks = await axios.get('http://localhost:4000/homeworks')
        commit('initializeHomeworks', homeworks.data)
      } catch (error) {
        throw new Error(error)
      }
    },
    async initializeUsers({ commit }) {
      try {
        const users = await axios.get('http://localhost:4000/users')
        commit('initializeStudents', users.data)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  modules: {
  }
})
