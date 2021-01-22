import { AppState } from '../AppState'
import { api } from '../services/AxiosService'

class BlogService {
  async getBlogs() {
    const res = await api.get('api/blogs')
    AppState.blogs = res.data
    console.log(res.data)
  }
}

export const blogService = new BlogService()
