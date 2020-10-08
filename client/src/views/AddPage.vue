<template>
  <section id="add-page">
    <div class="container justify-content-center col-4 mt-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Add Task</h3>
        <hr>
        <form class="my-4" onsubmit="">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="add-title" id="add-title"/>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" name="add-description" id="add-description" />
          </div>
          <div class="form-group">
            <label for="">Select Category</label>
            <select class="form-control" id="">
              <option>Backlog</option>
              <option>Todo</option>
              <option>Doing</option>
              <option>Done</option>
            </select>
          </div>

          <button id="btn-add" type="submit" class="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AddPage'
}
</script>

<style>

</style>