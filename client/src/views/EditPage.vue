<template>
  <section id="edit-page">
    <div class="container justify-content-center col-4 mt-5">
      <div>
        <h3 class="text-center bg-info rounded shadow text-white">Edit Task</h3>
        <hr>
        <form class="my-4" @submit.prevent="editTask">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" v-model="title" class="form-control" name="edit-title" id="edit-title"/>
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" v-model="description" class="form-control" name="edit-description" id="edit-description" />
          </div>
          <div class="form-group">
            <label for="">Select Category</label>
            <select class="form-control" v-model="category" id="">
              <option value="backlog">Backlog</option>
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </div>

          <button id="btn-edit" type="submit" class="btn btn-info">
            Edit
          </button>
        </form>
        <button id="btn-add" type="submit" @click.prevent="backToHomePage" class="btn btn-danger float-left">
          Cancel
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EditPage',
  props: [ 'taskDetail'],
  data() {
    return {
      title: this.taskDetail.title,
      description: this.taskDetail.description,
      category: this.taskDetail.category
    }
  },
  methods: {
    editTask() {
      let payload = {
        id: this.taskDetail.id,
        title: this.title,
        description: this.description,
        category: this.category
      }
      this.$emit('editTask', payload)
    },
    backToHomePage() {
      this.$emit('changePage', 'homePage')
    }
  }
}
</script>

<style>

</style>