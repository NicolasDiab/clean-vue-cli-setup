<template>
  <v-snackbar
    :timeout="timeoutValue"
    :bottom="true"
    :right="true"
    :color="colorValue"
    :value="colorValue"
    :label="colorValue"
    v-model="snackbar"
  >
    {{ text }}
    <v-btn flat color="white" @click.native="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Toaster',
  props: {
    timeoutValue: {
      type: Number,
      default: 6000
    },
    text: {
      type: String,
      default: 'Bonsoir.'
    },
    colorValue: {
      type: String,
      default: 'default'
    },
    snackbar: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
