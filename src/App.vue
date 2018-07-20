<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--
Default entry point to application
All others vue components will be rendered here inside "<router-view/>"
Configure your router to choose which component will be rendered
In this page, you can add some nice  global layout with vuetify. See them here : https://vuetifyjs.com/en/layout/pre-defined
<v-app> html tag is used for Vuetify. Without it, you won't be able to use vuetify
 -->
    <v-app>

      <router-view @toaster="showToaster"/> <!-- you can catch custom events in App.vue this way -->

      <toaster :snackbar="snackbarValue" :text="snackbarTextValue" :color-value="snackbarColorValue"></toaster>
    </v-app>
  </div>
</template>

<script>
import Toaster from './components/Toaster'

export default {
  name: 'App',
  components: {
    'toaster': Toaster
  },
  data: () => ({
    snackbarValue: false,
    snackbarTextValue: 'Bonsoir.',
    snackbarColorValue: 'success'
  }),
  methods: {
    showToaster: function (text, color, showVAlert) {
      this.snackbarValue = true;
      this.snackbarTextValue = text;
      this.snackbarColorValue = color;

      // reset values after a certain time
      setTimeout(() => {
        this.snackbarValue = false;
        this.snackbarTextValue = '';
        this.snackbarColorValue = 'default';
      }, 6000);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
