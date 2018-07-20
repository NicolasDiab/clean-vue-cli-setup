import Vue from 'vue'
import axios from 'axios'

export default {
  get (url) {
    const baseUrl = Vue.config.BASE_URL

    return axios.get(baseUrl + url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
