import Vue from 'vue'
import Vuex from 'vuex'
import {AXIOS} from './axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},

    profile: {
      FIO: '',
      position: '',
      qualification: '',
      professionalDevelopment: [],
      awards: [],
    },

    courses: [
      {
        text: 'Введение в преподавание английского языка как второго языка',
      },
      {
        text: 'Практика формирования контента для онлайн-курса в условиях цифрового обучения(исключительно ЭОиДОТ)',
      },
      {
        text: 'Создание и использование цифровых образовательных ресурсов в профессиональной деятельности учителя(исключительно ЭОиДОТ)',
      },
      {
        text: 'Актуальные вопросы преподавания английского языка и культуры в работе преподавателя естественнонаучных и технических факультетов вузов и колледжей (с частичным применением ЭОиДОТ)',
      },
    ],

    awards: [
      {
        text: 'Почетная грамота Правительства ДНР в области образования',
      },
      {
        text: 'Благодарность Правительства ДНР в области образования',
      },
    ],

    avatar: '',
  },

  getters: {
    arrayAddChangeProperty: state => array => {
      return state[array].map(function (item) {
          let newItem = Object.assign({}, item);
          newItem.change = false;
          return newItem
        }
      );
    }
  },

  mutations: {
    set_avatar(state, url) {
      state.avatar = url;
    }
  },
  actions: {},
  modules: {}
})
