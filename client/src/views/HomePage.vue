<template>
   <div class="container">
      <h6 class="p-2 text-center mt-4 mb-4 btn-success col-1 rounded shadow" id="add-task">Add Task</h6>
      <div class="row mt-4 mb-4">
        <!-- card backlog start -->
        <div class="col-md-3 bg-white rounded">
          <div class="text-center bg-warning text-white p-2 rounded shadow mt-3">Backlog</div>
          <div class="card border-warning mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">email pembuat</div>
            <div class="card-body text-black">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link text-center"><i class="material-icons">mode_edit</i></a>
              <a href="#" class="card-link float-right"><i class="material-icons">delete</i></a>
            </div>
          </div>
        </div>
        <!-- card backlog end -->
        <!-- card todo start  -->
        <div class="col-md-3 bg-white rounded">
          <div class="text-center bg-primary text-white p-2 rounded shadow mt-3">Todo</div>
          <div class="card border-primary mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">email pembuat</div>
            <div class="card-body text-black">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link text-center"><i class="material-icons">mode_edit</i></a>
              <a href="#" class="card-link float-right"><i class="material-icons">delete</i></a>
            </div>
          </div>
        </div>
        <!-- card todo end -->
        <!-- card doing start -->
        <div class="col-md-3 bg-white rounded">
          <div class="text-center bg-info text-white p-2 rounded shadow mt-3">Doing</div>
          <div class="card border-info mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">email pembuat</div>
            <div class="card-body text-black">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link text-center"><i class="material-icons">mode_edit</i></a>
              <a href="#" class="card-link float-right"><i class="material-icons">delete</i></a>
            </div>
          </div>
        </div>
        <!-- card doing end -->
        <!-- card done start -->
        <div class="col-md-3 bg-white rounded">
          <div class="text-center bg-success text-white p-2 rounded shadow mt-3">Done</div>
          <div class="card border-success mb-3 mt-3" style="max-width: 18rem;">
            <div class="card-header">email pembuat</div>
            <div class="card-body text-black">
              <h5 class="card-title">Success card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="card-link text-center"><i class="material-icons">mode_edit</i></a>
              <a href="#" class="card-link float-right"><i class="material-icons">delete</i></a>
            </div>
          </div>
        <!-- card done end  -->
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>

</style>