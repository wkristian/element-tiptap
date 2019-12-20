import Vue from 'vue';
import {
  // layout
  Container,
  Header,
  Main,
} from 'element-ui';

import { ElementTiptapPlugin } from 'element-tiptap';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);

Vue.use(ElementTiptapPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
