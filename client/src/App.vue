<template>
  <section>
    <!-- navbar -->
    <!-- <h1>{{message}}</h1> -->
    <div class="container-flex">
      <div class="item-flex">Logo</div>
      <div class="item-flex" style="letter-spacing: 3px;"><b>KANBAN</b></div>
      <div class="item-flex">Logout</div>
    </div>
    <!-- end of navbar -->
    <HomePage></HomePage>
    <LoginPage></LoginPage>
    <RegisterPage></RegisterPage>

    
  </section>
</template>

<script>
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
export default {
  data() {
    return {
      message: 'Hello Mets'
    }
  },
  components: { 
    HomePage, LoginPage, RegisterPage 
  }
}
</script>

<style>

</style>