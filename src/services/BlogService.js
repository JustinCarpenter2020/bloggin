import { AppState } from '../AppState'
import { api } from '../services/AxiosService'

class BlogService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
    console.log(res.data)
  }

  async getOne(id) {
    const res = await api.get('api/blogs/' + id)
    AppState.activeBlog = res.data
    console.log(res.data)
  }

  async getComments(id) {
    const res = await api.get('api/blogs/' + id + '/comments')
    AppState.comments = res.data
    console.log(res.data)
  }

  revealComments() {
    document.getElementById('comments').hidden = false
    document.getElementById('button').hidden = false
  }

  hideComments() {
    document.getElementById('comments').hidden = true
    document.getElementById('button').hidden = true
  }
}

export const blogService = new BlogService()
