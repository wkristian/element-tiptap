import Vue from 'vue';

import './styles/quasar.scss';
import 'quasar/dist/quasar.ie.polyfills';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import {
  Quasar,
  QDialog,
  QPopupProxy,
  QUploader,
  ClosePopup,
  Dialog,
  QBtn,
} from 'quasar';

import {
  // layout
  Container,
  Header,
  Main,
  Footer,
  Button,
} from 'element-ui';

import { ElementTiptapPlugin } from 'element-tiptap';
import App from './App.vue';
import router from './router';

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);

Vue.use(ElementTiptapPlugin);

Vue.use(Quasar, {
  config: {
    framework: 'all'
  },
  components: {
    QDialog,
    QPopupProxy,
    QBtn,
    QUploader,
  },
  directives: {
    ClosePopup
  },
  plugins: {
    Dialog
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#q-app');
