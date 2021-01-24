<template>
  <div class="home flex-grow-1 d-flex flex-column container-fluid">
    <div class="row">
      <div class="col-xs-12">
        <div class="hero-image" id="hero-image">
          <img src="https://images.unsplash.com/photo-1611094607507-8c8173e5cf33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
      </div>
    </div>
    <h1 class="text-light pt-4">
      <u>Today's Blogs:</u>
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
 background-color: #000000;
background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);;

.hero-image {
  width: 100vw;
  position: relative;
    width: 100%;
  display: block;
}
}

</style>
