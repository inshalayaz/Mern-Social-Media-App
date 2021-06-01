import axios from 'axios'

const API = axios.create({ baseURL: 'https://inshal-mern-social-media-app.herokuapp.com' })
 
export const fetchPost = () => API.get('./posts')
export const createPost = (newPost) => API.post('/posts',newPost)
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
