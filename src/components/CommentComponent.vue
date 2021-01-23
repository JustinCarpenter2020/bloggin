<template>
  <div class="CommentComponent col-12">
    <div class="card border border-dark">
      <div class="card-body">
        <p class="card-text" v-if="commentProp.creator">
          <img v-if="commentProp.creator" class="avatar" :src="commentProp.creator.picture" alt="">
          {{ commentProp.creator.name }}
          <span class="text-right">
            <i class="far fa-minus-square text-danger pointer" @click="deleteComment" v-if="state.account.id == commentProp.creatorId"></i>
          </span>
        </p>
        <p v-if="commentProp.creator">
          {{ commentProp.body }}
        </p>
      </div>
    </div>
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
.border{
  border-width: 10px;
}

.avatar{
  height: 30px;
  width: 30px;
}

</style>
