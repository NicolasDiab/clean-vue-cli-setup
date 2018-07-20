<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>

    <div>
      <p v-if="error">{{error}}</p>

      <h3>Example with Game of Thrones Houses</h3>
      <p>Used data-table. A Vuetify component</p>

      <v-data-table
        :headers="headers"
        :items="gotHouses"
        class="elevation-10"
        :rows-per-page-items="rowsPerPageItems"
      >
        <template slot="items" slot-scope="props">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{props.item.region}}</td>
          <td class="text-xs-right">{{props.item.coatOfArms}}</td>
          <td class="text-xs-right">{{props.item.words}}</td>
        </template>
      </v-data-table>

      <v-layout>
        <v-flex md2>
          <v-btn color="purpleDark" dark v-on:click="goToBooks"><v-icon>arrow_forward</v-icon> Exemple de navigation</v-btn>
          All icons like the arrow from <a href="https://material.io/icons/">https://material.io/icons/</a>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import RestService from '../services/RestService'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      gotHouses: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'region', value: 'region' },
        { text: 'coatOfArms', value: 'coatOfArms' },
        { text: 'words', value: 'words' }
      ],
      errors: '',
      rowsPerPageItems: [
        10, 25, 50, {'text': 'All', 'value': -1}
      ]
    }
  },
  methods: {
    getGotHouses: function () {
      RestService.get('houses/')
        .then(response => {
          this.gotHouses = response.data
        })
        .catch(error => {
          this.error = "Erreur ! Impossible d'accéder à l'API." + error
          this.$log.error(error)
        })
    },
    goToBooks: function () {
      this.$router.push({ name: 'Books' })
    }
  },
  mounted: function () {
    // mounted is part of Vue lifecycle. It is executed right after the componant and his variables init
    // get info from API
    this.getGotHouses()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
