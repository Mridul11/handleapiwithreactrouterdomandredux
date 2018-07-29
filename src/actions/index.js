import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POSTS = 'create_posts';
export const FETCH_POST  = 'fetch_post';
export const DELETE_POST = 'delete_post';

const root_url = 'http://reduxblog.herokuapp.com/';
//const API_KEY = '?key=1234';

export function fetchPosts(){
    const request = axios.get(`${root_url}api/posts`);
    return {
        type : FETCH_POSTS,
        payload : request
    }
};

export function createPosts(values, callback){
    const request = axios.post(`${root_url}api/posts`, values)
                         .then( () => callback());
    return {
        type : CREATE_POSTS,
        payload : request
    }
}

export function fetchPost(id){
    const request = axios.get(`${root_url}api/posts/${id}`)
    return{
        type : FETCH_POST,
        payload : request
    }
}

export function deletePost(id, callback){
    const request = axios.delete(`${root_url}api/posts/${id}`)
                         .then(() => callback()) ;
    return{
        type : DELETE_POST,
        payload : request
    }
}