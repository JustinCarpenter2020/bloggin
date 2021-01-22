<template>
  <div class="CommentComponent">
    <h1>hellow comments</h1>
    <img v-if="commentProp.creator" class="avatar" :src="commentProp.creator.picture" alt="">
    <h2 v-if="commentProp.creator">
      {{ commentProp.creator.name }} | {{ commentProp.body }}
    </h2> <p class="text-right">
      <i class="far fa-minus-square" v-if="state.account.id == commentProp.creatorId"></i>
    </p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.avatar{
  border-radius: 50%;

}
</style>
