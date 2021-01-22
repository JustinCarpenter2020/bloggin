<template>
  <div class="CommentComponent">
    <img v-if="commentProp.creator" class="avatar" :src="commentProp.creator.picture" alt="">
    <h2 v-if="commentProp.creator">
      {{ commentProp.creator.name }} | {{ commentProp.body }}
    </h2> <p class="text-right">
      <i class="far fa-minus-square text-danger pointer" @click="deleteComment" v-if="state.account.id == commentProp.creatorId"></i>
    </p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { blogService } from '../services/BlogService'
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state,
      deleteComment() {
        try {
          blogService.deleteComment(props.commentProp.id)
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
.avatar{
  border-radius: 50%;

}

.pointer{
  cursor: pointer;
}
</style>
