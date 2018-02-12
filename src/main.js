import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import * as VueGoogleMaps from 'vue2-google-maps'

import router from './router'
import App from './App'
import store from './stores/configureStore'
import { GOOGLE } from './common';

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE.KEY,
    libraries: 'places'
  }
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
