
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

  async createBlog(blog) {
    const res = await api.post('api/blogs/', blog)
    AppState.blogs.push(res.data)
    return res.data.id
  }

  async deleteBlog(id) {
    await api.delete('api/blogs/' + id)
    const blogInd = AppState.blogs.findIndex(b => b.id === id)
    AppState.blogs.splice(blogInd, 1)
  }

  async createComment(commentData) {
    const res = await api.post('api/comments/', commentData)
    AppState.comments.push(res.data)
    this.getComments(commentData.blog)
  }

  async deleteComment(id) {
    await api.delete('api/comments/' + id)
    const commId = AppState.comments.findIndex(c => c.id === id)
    AppState.comments.splice(commId, 1)
  }
}

export const blogService = new BlogService()
