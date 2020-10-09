<template>
   <!-- login-page -->
    <section id="login-page">
      <div class="container">
        <div class="row mt-4 mb-4">
          <div class="col-md-8 bg-dark">
            <img src="../images/Kanban-Development-Board.png" style="width: 100%;" alt="">
          </div>
          <div class="col-md-4 bg-info d-flex align-items-center justify-content-center">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title text-center"><b>WELCOME TO KANBAN</b></h5>
                <p class="card-text text-center">Login</p>
                <form @submit.prevent="login" id="login-form">
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
                <p class="mt-2">New here ? <a href="#" @click.prevent="register">Register</a>!</p>
                <h6 class="mt-3">
                  <p>Or, use another account:</p>
                </h6>
                <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      clientId: '1012603273647-fmdno5l6o6li8npuc15s30npjl47qnlr.apps.googleusercontent.com'
    }
  },
  methods: {
    login() {
      this.$emit('login', { email: this.email, password: this.password })
    },
    register() {
      this.$emit('changePage','register')
    },
    // googleSign() {
    //   this.$emit('')
    // },
    OnGoogleAuthSuccess (idToken) {
      console.log(idToken, '<< token')
      this.$emit('googleSign', idToken)
      // Receive the idToken and make your magic with the backend
    },
    OnGoogleAuthFail (error) {
      console.log(error, '<< error')
    }
  }
}
</script>

<style>
.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>