import { createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
  addPost,
  createComment,
  getPostsData,
  delPost,
  addLike,
} from './operations';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    login: '',
    uri: null,
    uid: null,
    isAuth: false,
    error: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      const { email, login, uri, uid } = action.payload;
      state.email = email;
      state.login = login;
      state.uri = uri;
      state.uid = uid;
      state.isAuth = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {})
      .addCase(createUser.fulfilled, (state, action) => {
        const { email, login, url, uid } = action.payload;
        state.email = email;
        state.login = login;
        state.uri = url;
        state.uid = uid;
        state.isAuth = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state, action) => {})
      .addCase(loginUser.fulfilled, (state, action) => {
        const { email, login, url, uid } = action.payload;
        state.email = email;
        state.login = login;
        state.uri = url;
        state.uid = uid;
        state.isAuth = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state, action) => {})
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.email = '';
        state.login = '';
        state.uri = null;
        state.uid = null;
        state.isAuth = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state, action) => {})
      .addCase(updateUser.fulfilled, (state, action) => {
        const { email, login, url, uid } = action.payload;
        state.email = email;
        state.login = login;
        state.uri = url;
        state.uid = uid;
        state.isAuth = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { setCurrentUser } = userSlice.actions;

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPost.pending, (state, action) => {})
      .addCase(addPost.fulfilled, (state, action) => {
        const { id, url, name, location, geoLocation, email } = action.payload;
        state.posts.push({
          email,
          id,
          url,
          name,
          location,
          geoLocation,
        });
      })
      .addCase(addPost.rejected, (state, action) => {})
      .addCase(createComment.pending, (state, action) => {})
      .addCase(createComment.fulfilled, (state, action) => {
        const { comment, postId } = action.payload;
        const post = state.posts.find((post) => post.id === postId);
        post.comments
          ? post.comments.push({ comment })
          : (post.comments = [comment]);
      })
      .addCase(createComment.rejected, (state, action) => {})
      .addCase(getPostsData.pending, (state, action) => {})
      .addCase(getPostsData.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getPostsData.rejected, (state, action) => {})
      .addCase(addLike.pending, (state, action) => {})
      .addCase(addLike.fulfilled, (state, action) => {
        const { postId, email } = action.payload;
        const [post] = state.posts.filter((post) => post.id === postId);
        post.likes ? post.likes.push(email) : (post.likes = [email]);
      })
      .addCase(addLike.rejected, (state, action) => {});
  },
});

export const postReducer = postSlice.reducer;