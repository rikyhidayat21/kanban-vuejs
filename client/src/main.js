import Vue from 'vue';
import App from './App.vue';
import GoogleSignInButton from 'vue-google-signin-button-directive'

new Vue({
  render: h => h(App),
  GoogleSignInButton
}).$mount('#app');