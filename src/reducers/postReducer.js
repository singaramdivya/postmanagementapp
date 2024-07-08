import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      return action.payload;
    },
    addPost(state, action) {
      state.push(action.payload);
    },
    editPost(state, action) {
      const updatedPost = action.payload;
      const index = state.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        state[index] = updatedPost;
      }
    },
  },
});

export const { setPosts, addPost, editPost } = postSlice.actions;
export default postSlice.reducer;

