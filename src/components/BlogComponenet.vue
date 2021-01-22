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
export default {
  name: 'BlogComponenet',
  props: { blogProp: { type: Object, required: true } },
  setup(props) {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.border{
 border-radius: 8%;
}
</style>
