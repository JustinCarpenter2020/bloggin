<template>
  <div class="BlogComponenet">
    <div class="col my-2">
      <div class="card border ">
        <div class="card-body bg-secondary text-light">
          <h4 class="card-title">
            <router-link class="link"
                         :to="{
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
 border-color: #7E868D;
}

.point{
  cursor: pointer;
}

.card{
  width: 18rem;
  height: 10rem;
   border-radius: 4px;
  background: rgb(0, 0, 0);
  box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
    transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
}
.card:hover{
  border-color: #2069e0;
  transform: scale(1.05);
box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

.link{
  color: #EEFBFB;
}
.link:hover{
color: #0476D9;
}
</style>
