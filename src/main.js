// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import colors from 'vuetify/es5/util/colors'
import VueLogger from 'vuejs-logger'

Vue.config.productionTip = false;

// Put your config variables here
Vue.config.BASE_URL = process.env.BASE_URL;

// vue-logger
const loggerOptions = process.env.LOGGER.OPTIONS;
Vue.use(VueLogger, loggerOptions);
// call it with
// this.$info('hello world')
// this.$error('hello world')
// ...

// vuetify theme configuration
// we redefine and add custom colors here
Vue.use(Vuetify, {
  theme: {
    secondary: colors.yellow.base,
    accent: colors.amber.base,
    primary: colors.orange.darken2,

    modify: colors.orange.darken2,
    yellowLight: colors.yellow.lighten1,
    purpleDark: '#C70039',
    redPurple: '#E83A45',
    purpleLight: '#AF0C4B',
    orange: '#FF5733',

    blueDark: '#073B4C',
    blueLight: '#538FC6',
    greenLight: '#05bb4e',
    redLight: '#EF476F',
    orangeLight: '#FFD166'

    /* DEFAULT VALUES
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
*/
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
