import { setPosts, addPost, editPost } from '../reducers/postReducer';

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  dispatch(setPosts(data));
};

export const createPost = (post) => async (dispatch) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  dispatch(addPost(data));
};

export const updatePost = (post) => async (dispatch) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  dispatch(editPost(data));
};

