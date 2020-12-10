import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import VueCompositionApi from '@vue/composition-api';
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VuetifyDialog, {
  context: {
    vuetify
  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
