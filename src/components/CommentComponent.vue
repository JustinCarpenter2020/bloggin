<template>
  <div class="CommentComponent">
    <h1>hellow comments</h1>
    <img class="avatar" :src="commentProp.creator.picture" alt=""><h2>{{ commentProp.creator.name }} | {{ commentProp.body }}</h2>
  </div>
</template>

<script>
export default {
  name: 'CommentComponent',
  props: { commentProp: { type: Object, required: true } },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.avatar{
  border-radius: 50%;

}
</style>
