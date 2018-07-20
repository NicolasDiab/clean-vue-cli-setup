<template>
  <div>
    <div>
      <h3>Example with Game of Thrones Books</h3>
      <p>Used data-table. A Vuetify component</p>

      <v-data-table
        :headers="headers"
        :items="gotBooks"
        class="elevation-10"
      >
        <template slot="items" slot-scope="props">
          <td class="text-xs-right">{{ props.item.name }}</td>
          <td class="text-xs-right">{{props.item.isbn}}</td>
          <td class="text-xs-right">{{props.item.numberOfPages}}</td>
          <td class="text-xs-right">{{props.item.country}}</td>
          <td class="text-xs-right">{{props.item.released | momentParseDateToDisplay}}</td>
        </template>
      </v-data-table>

      <v-layout>
        <v-flex md2>
          <v-btn color="purpleDark" dark v-on:click="goBack"><v-icon>arrow_back</v-icon> Exemple de navigation</v-btn>
          All icons from <a href="https://material.io/icons/">https://material.io/icons/</a>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import RestService from '../services/RestService'
import MomentService from '../services/MomentService'
import ToasterMixin from '../mixins/ToasterMixin'
import Book from '../models/book'
import BookService from '../services/core/BookService'

export default {
  name: 'Books',
  mixins: [ToasterMixin],
  data () {
    return {
      gotBooks: [],
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'isbn', value: 'isbn' },
        { text: 'numberOfPages', value: 'numberOfPages' },
        { text: 'country', value: 'country' },
        { text: 'released : used MomentService and filters', value: 'released' }
      ]
    }
  },
  methods: {
    getGotBooks: function () {
      BookService.list()
        .then(books => {
          this.gotBooks = books;
          this.handleSuccess() // méthode issue du mixin de Toaster
        })
        .catch(error => {
          this.handleHttpError(error) // méthode issue du mixin de Toaster
        });
    },
    goBack: function () {
      this.$router.push({ name: 'HelloWorld' })
    }
  },
  filters: {
    momentParseDateToDisplay: function (date) {
      return MomentService.momentParseDateToDisplay(date)
    }
  },
  mounted: function () {
    // mounted is part of Vue lifecycle. It is executed right after the componant and his variables init
    // get info from API
    this.getGotBooks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
