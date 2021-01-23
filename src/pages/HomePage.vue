<template>
  <div class="home flex-grow-1 d-flex flex-column container-fluid">
    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <h1 class="text-success">
      Today's Blogs:
    </h1>
    <div class="row m-5">
      <BlogComponenet v-for="blog in state.blogs" :key="blog.id" :blog-prop="blog" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, onMounted } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogService } from '../services/BlogService'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      blogs: computed(() => AppState.blogs)
    })
    onMounted(async() => {
      try {
        await blogService.getBlogs()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
