import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import * as VueGoogleMaps from 'vue2-google-maps'
import VueNotifications from 'vue-notifications'
import toastr from 'toastr'
import VueScrollTo from 'vue-scrollto'

import router from './router'
import App from './App'
import store from './stores/configureStore'
import { GOOGLE } from './common';

function toast({ title, message, type, timeout, cb }) {
  // eslint-disable-next-line
  if (type === VueNotifications.types.warn) type = 'warning';
  return toastr[type](message, title, { timeOut: timeout })
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

Vue.use(VueNotifications, options);
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);
Vue.use(VueGoogleMaps, {
  load: {
    key: GOOGLE.KEY,
    libraries: 'places'
  }
});
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
