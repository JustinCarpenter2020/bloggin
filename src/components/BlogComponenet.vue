<template>
  <div class="BlogComponenet">
    <div class="col">
      <div class="card border-primary">
        <div class="card-body">
          <h4 class="card-title">
            <router-link :to="{
              name:
                'BlogDetails',
              params:
                {id:
                  blogProp.id }}"
            >
              {{ blogProp.title }}
            </router-link>
            <span class="ml-2 text-danger">
              <i class="far fa-minus-square point" v-if="state.account.id == blogProp.creatorId" @click="deleteBlog"></i>
            </span>
          </h4>
          <p class="card-text">
            {{ blogProp.creator.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { blogService } from '../services/BlogService'
import { logger } from '../utils/Logger'
export default {
  name: 'BlogComponenet',
  props: { blogProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state,
      deleteBlog() {
        try {
          blogService.deleteBlog(props.blogProp.id)
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
 border-radius: 8%;
}

.point{
  cursor: pointer;
}
</style>
