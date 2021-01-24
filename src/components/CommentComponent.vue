<template>
  <div class="CommentComponent col-12">
    <div class="card border border-dark">
      <div class="card-body">
        <p class="card-text" v-if="commentProp.creator">
          <img v-if="commentProp.creator" class="avatar" :src="commentProp.creator.picture" alt="">
          {{ commentProp.creator.name }}
          <span class="text-right">
            <div class="dropdown" v-if="state.account.id == commentProp.creatorId">
              <button class="btn btn-white dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
              >
                ⋮
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div @click="deleteComment" class="dropdown-item clicks" href="#">Delete Comment</div>
                <div class="dropdown-item clicks" href="#" data-toggle="modal" data-target="#exampleModalCenter">Edit Comment</div>
              </div>
            </div>
          </span>
        </p>
        <p v-if="commentProp.creator">
          {{ commentProp.body }}
        </p>
      </div>
    </div>
  </div>
  <div class="modal fade"
       id="exampleModalCenter"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalCenterTitle"
       aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">
            Edit Comment Below:
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editComment">
            <div class="form-group">
              <label for=""></label>
              <input type="text"
                     class="form-control"
                     name="edit"
                     id="edit"
                     v-model="state.editComment.body"
                     aria-describedby="helpId"
                     placeholder="New Comment"
              >
            </div>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
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
      account: computed(() => AppState.account),
      editComment: {}
    })
    return {
      state,
      deleteComment() {
        logger.log(props.commentProp.id)
        try {
          blogService.deleteComment(props.commentProp.id)
        } catch (error) {
          logger.error(error)
        }
      },
      async editComment() {
        try {
          blogService.editComment(props.commentProp.id, state.editComment)
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

.clicks{
  cursor: pointer;
}
</style>
