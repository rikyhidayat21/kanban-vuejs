<template>
   <!-- login-page -->
    <div class="container" id="login-page">
      <div class="row mt-4 mb-4">
        <div class="col-md-8 bg-dark">
          <img src="../images/Kanban-Development-Board.png" style="width: 100%;" alt="">
        </div>
        <div class="col-md-4 bg-info d-flex align-items-center justify-content-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center"><b>WELCOME TO KANBAN</b></h5>
              <p class="card-text text-center">Login</p>
              <form action="">
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Login</button>
                <p class="mt-2">New here ? <a href="#">Register</a>!</p>
                <h6 class="mt-3">
                  <p>Or, use another account:</p>
                </h6>
                <div class="g-signin2" data-onsuccess="onSignIn"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style>

</style>