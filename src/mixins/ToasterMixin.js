export default {
  methods: {
    handleHttpError: function (httpError) {
      console.log(httpError.response);
      console.log(httpError.toString());
      console.log(httpError.message);

      const text = 'Erreur ! ' + httpError && httpError.response && httpError.response.data && httpError.response.data.message
        ? httpError.response.data.message
        : httpError.toString() || '';
      this.$emit('toaster', text, 'error', true);
    },
    handleSuccess: function (message) {
      message = message || 'Opération réussie.';
      this.$emit('toaster', message, 'success', true);
    }
  }
}
