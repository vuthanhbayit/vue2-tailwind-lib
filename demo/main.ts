import Vue, { VNode } from 'vue'
import App from './app.vue'
import VueCompositionApi from '@vue/composition-api'
import Demo from '../dist/demo.es'
import '../dist/style.css'
// import Demo from '@/index'

Vue.config.productionTip = false

Vue.use(VueCompositionApi)
Vue.use(Demo)

new Vue({
  render: (h): VNode => h(App),
}).$mount('#app')
