<template>
  <div class="about container-fluid">
    <div class="row ml-2 mt-2">
      <div class="col-12">
        <img :src="account.picture" alt="" />
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h1>
          Welcome Back {{ account.name }}!
        </h1>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 text-center">
        <h3>
          Your Blogs:
        </h3>
      </div>
      <div class="col-6 text-right">
        <form @submit.prevent="createBlog">
          <div class="form-group">
            <label for=""></label>
            <input type="text"
                   class="form-control put"
                   name="Blog title"
                   v-model="state.newBlog.title"
                   id="title"
                   aria-describedby="helpId"
                   placeholder="Blog title"
            >
          </div>
          <div class="form-group">
            <label for=""></label>
            <input type="text"
                   class="form-control put"
                   name="img"
                   v-model="state.newBlog.imgUrl"
                   id="img"
                   aria-describedby="helpId"
                   placeholder="ImgURL"
            >
          </div>
          <div class="form-group">
            <label for=""></label>
            <input type="text"
                   class="form-control body"
                   name="body"
                   v-model="state.newBlog.body"
                   id="body"
                   aria-describedby="helpId"
                   placeholder="Body"
            >
          </div>
          <div class="form-group">
            <label for=""></label>
            <input type="text"
                   class="form-control put"
                   name="tags"
                   id="tags"
                   v-model="state.newBlog.tags"
                   aria-describedby="helpId"
                   placeholder="Tags?"
            >
          </div>
          <button type="submit" class="btn btn-success mb-3">
            Create New Blog
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import { blogService } from '../services/BlogService'

export default {
  name: 'Account',
  setup(props) {
    // const route = useRoute
    const state = reactive({
      myBlogs: computed(() => AppState.myBlogs),
      account: computed(() => AppState.account),
      newBlog: {}
    })
    // onMounted(async() => {
    //   try {
    //     await blogService.myBlogs(state.account.id)
    //   } catch (error) {
    //     logger.error(error)
    //   }
    // })
    return {
      state,
      account: computed(() => AppState.account),
      async createBlog() {
        try {
          await blogService.createBlog(state.newBlog)
          state.newBlog = {}
        } catch (error) {
          logger.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
  border-radius: 50%;
}

.body{
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}
.put{
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
}
</style>
