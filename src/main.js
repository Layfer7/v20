import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router';
import { routes } from './routes';
import { createStore } from 'vuex';
import Api from './api/index.js' ;

export const api = new Api.Api('http://localhost:4000')

export const store = createStore({
    state () {
      return {
        modalIsVisible: false,
        parent:'',
      }
    },
    mutations: {
      setVisible (state) {
        state.modalIsVisible = true;
      },
      setInvisible(state) {
        state.modalIsVisible = false;
      },
      getParent(state,value) {
        state.parent = value;
      }
    }
  })

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})
createApp(App).use(router).mount('#app')
