<template>
  <section>

    <LoginPage
      @login="login"
      v-if="isLogin == 'login'"
      @changePage="changePage"
    ></LoginPage>
    <HomePage
      @changePage='changePage'
      :categories="categories"
      :tasks="tasks"
      v-else-if="isLogin == 'homePage'"
      @deleteTask="deleteTask"
    ></HomePage>
    <RegisterPage
      @register="register"
      v-else-if="isLogin == 'register'"
    ></RegisterPage>
    <AddPage
      v-else-if="isLogin == 'addPage'"
      @addPage="addPage"
    ></AddPage>
    <EditPage
      v-else-if="isLogin == 'editPage'"
    ></EditPage>
    
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
          category: 'backlog',
          color: 'warning'
        },
        {
          category: 'todo',
          color: 'primary'
        },
        {
          category: 'doing',
          color: 'info'
        },
        {
          category: 'done',
          color: 'success'
        }
      ],
      baseUrl: 'http://localhost:3000',
      isLogin: 'login', 
      tasks: []
    }
  },
  methods: {
    login(data) {
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
          localStorage.setItem('access_token', data.access_token)
          this.changePage('homePage')
          this.fetchTask()

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
    },
    changePage(isLogin) {
      console.log(isLogin)
      this.isLogin = isLogin
    },
    fetchTask() {
      axios({
        url: `${this.baseUrl}/tasks`,
        method: 'get',
        headers: { access_token: localStorage.access_token },

      })
        .then(({data}) => {
          this.tasks = data.task
          console.log(data, '<< data dari fetch')
        })
        .catch(err => {
          console.log(err.response, '<< error fetch data')
        })
    },
    deleteTask(data) {
      // console.log(data)
      axios({
        url: `${this.baseUrl}/tasks/${data}`,
        method: 'delete',
        headers: { access_token: localStorage.access_token}
      })
        .then(({data}) => {
          console.log(data, '<< delete jaadi')
          this.fetchTask()
        })
        .catch(err => {
          console.log(err.response, '<< error delete')
        })
    },
    addPage(data){

      axios({
        url: `${this.baseUrl}/tasks`,
        method: 'post',
        headers: { access_token: localStorage.access_token},
        data: {
          title: data.title,
          description: data.description,
          category: data.category
        }
      })
        .then(({ data }) => {
          console.log(data,' data dari app')
          this.fetchTask()
          this.changePage('homePage')
        })
        .catch(err => {
          console.log(err, '<< error add task')
        })
    }
  },
  // lifecycle created
  created() {
    console.log('masuk created')
    if (localStorage.access_token) {
      console.log('dah ada token')
      this.changePage('homePage')
      this.fetchTask()
    } else {
      this.changePage('login')
      console.log('blm ada token')
    }
  }
}
</script>

<style>

</style>