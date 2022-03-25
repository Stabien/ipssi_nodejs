import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homeworks: [],
    students: [],
    teachers: [],
    schoolClasses: {},
    user: {}
  },
  getters: {
    homeworks(state) {
      return state.homeworks;
    },
    students(state) {
      return state.students;
    },
    schoolClasses(state) {
      return state.schoolClasses;
    }
  },
  mutations: {
    initializeHomeworks(state, data) {
      state.homeworks = data;
    },
    initializeUsers(state, data) {
      state.teachers = data.filter(user => user.role === 'TEACHER');
      state.students = data.filter(user => user.role === 'STUDENT');

      // loop to build the state of schoolClasses
      for (const user of state.students) {
        state.schoolClasses = {
          ...state.schoolClasses,
          [user.class]: data.filter(u => u.class === user.class),
        }
      }
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
        console.log(users.data)
        commit('initializeUsers', users.data)
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  modules: {
  }
})
