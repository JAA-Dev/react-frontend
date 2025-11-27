import axios from 'axios';
import type {Post} from '../types/Post';

const APP_URL = 'http://127.0.0.1:8000/api';
// const App_URL = 'https://journalnow.kesug.com/api';

export const getPosts = () => axios.get<Post[]>(App_URL + "/post");
export const createPost = (post: Omit<Post, 'id'>) => axios.post<Post>(App_URL + "/post", post);
export const getPost = (id: number | string) => axios.get<Post>(App_URL + `/post/${id}`);
export const updatePost = (id: number | string, data: Omit<Post, 'id'>) => axios.put<Post>(App_URL + `/post/${id}`, data);
export const deletePost = (id: number | string) => axios.delete<Post>(App_URL + `/post/${id}`);