<template>
  <section>
    <!-- navbar -->
    <!-- <h1>{{message}}</h1> -->
    <div class="container-flex">
      <div class="item-flex">Logo</div>
      <div class="item-flex" style="letter-spacing: 3px;"><b>KANBAN  BOARD</b></div>
      <div class="item-flex">Logout</div>
    </div>
    <!-- end of navbar -->
    <HomePage
      :categories="categories"
    ></HomePage>
    <LoginPage
      @login="login"
    ></LoginPage>
    <RegisterPage
      @register="register"
    ></RegisterPage>
    <AddPage></AddPage>
    <EditPage></EditPage>
    
  </section>
</template>

<script>
import HomePage from './views/HomePage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'
import AddPage from './views/AddPage'
import EditPage from './views/EditPage'
import axios from 'axios'
export default {
  name: 'App',
  components: { 
    HomePage, LoginPage, RegisterPage, AddPage, EditPage
  },
  data() {
    return {
      message: 'Hello Mets',
      categories: [
        {
          category: 'Backlog',
          color: 'warning'
        },
        {
          category: 'Todo',
          color: 'primary'
        },
        {
          category: 'Doing',
          color: 'info'
        },
        {
          category: 'Done',
          color: 'success'
        }
      ],
      baseUrl: 'http://localhost:3000'
    }
  },
  methods: {
    login(data) {
      console.log(data)
      axios({
        url: `${this.baseUrl}/login`,
        method: 'post',
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
          console.log(data, '<< success login')
        })
        .catch(err => {
          console.log(err.response, '<< error login')
        })
    },
    register(data) {
      axios({
        url: `${this.baseUrl}/register`,
        method: 'post',
        data: {
          email: data.email,
          password: data.password
        }
      })
        .then(({ data }) => {
          console.log(data, '<< success register')
        })
        .catch(err => {
          console.log(err.response, '<< error register')
        })
    }
  }
}
</script>

<style>

</style>