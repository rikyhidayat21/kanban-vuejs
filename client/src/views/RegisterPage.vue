<template>
  <!-- register page -->
  <section  id="register-page">
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-md-8 bg-info p-0">
          <img src="../images/register.jpg" style="width: 100%;" alt="">
        </div>
        <div class="col-md-4 bg-dark d-flex align-items-center justify-content-center">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center"><b>WELCOME TO KANBAN</b></h5>
              <p class="card-text text-center">Register</p>
              <form action="" id="register-form">
                <div class="form-group">
                  <label for="exampleInputEmail2">Email address</label>
                  <input type="email" class="form-control" placeholder="Enter email">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword2">Password</label>
                  <input type="password" class="form-control" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
                <button type="submit" class="btn btn-danger float-right">Back</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage'
}
</script>

<style>

</style>