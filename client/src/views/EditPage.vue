<template>
  <section id="edit-page">
    <div class="container justify-content-center col-4 mt-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Edit Task</h3>
        <hr>
        <form class="my-4" onsubmit="">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" name="edit-title" id="edit-title"/>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" name="edit-description" id="edit-description" />
          </div>
          <div class="form-group">
            <label for="">Select Category</label>
            <select class="form-control" id="">
              <option value="Backlog">Backlog</option>
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

          <button id="btn-edit" type="submit" class="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditPage'
}
</script>

<style>

</style>