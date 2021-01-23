<template>
  <div class="BlogDetailsPage container-fluid">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <div class="row">
      <div class="col text-center text-warning">
        <h1 class="pt-3">
          <b>{{ blog.title }}</b>
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <img class="border" :src="blog.imgUrl" />
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 text-center text-warning">
        <h5>
          {{ blog.body }}
        </h5>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center divide pb-5">
        <button @click="revealComments" class="btn btn-danger">
          Comments ↓
        </button>
        <button id="button" hidden @click="hideComments" class="btn btn-success ml-5">
          hide Comments
        </button>
      </div>
      <div hidden id="comments" class="row">
        <CommentComponent v-for="comment in state.comments" :key="comment.blog" :comment-prop="comment" />
        <div class="col-12">
          <form @submit.prevent="createComment" class="from-inline" v-if="state.user.isAuthenticated">
            <div class="form-group">
              <label for=""></label>
              <input type="text"
                     class="form-control"
                     name="new Comment"
                     v-model="state.newComment.body"
                     aria-describedby="helpId"
                     placeholder="New Comment"
              >
              <button type="submit" class="btn btn-success">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, computed } from 'vue'
import { blogService } from '../services/BlogService'
import { useRoute } from 'vue-router'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
export default {
  name: 'BlogDetailsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      loaded: false,
      comments: computed(() => AppState.comments),
      newComment: { blog: route.params.id },
      user: computed(() => AppState.user)
    })
    onMounted(async() => {
      try {
        await blogService.getOne(route.params.id)
        await blogService.getComments(AppState.activeBlog.id)
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state,
      blog: computed(() => AppState.activeBlog),
      revealComments() {
        try {
          blogService.revealComments()
        } catch (error) {
          logger.error(error)
        }
      },
      hideComments() {
        try {
          blogService.hideComments()
        } catch (error) {
          logger.error(error)
        }
      },
      async createComment() {
        try {
          console.log(state.newComment)
          blogService.createComment(state.newComment)
        } catch (error) {
          logger.error(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.border{
  border: 10px groove #F4D47C;
}

.divide{
  background-color: #082c6c;
}
</style>
