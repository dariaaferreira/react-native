import { createSelector } from "reselect";

export const getUser = (state) => state.user;
export const getEmail = (state) => state.user.email;
export const getAllPosts = (state) => state.posts.posts;

export const getFilterPost = (id) =>
  createSelector(getAllPosts, (posts) =>
    posts.filter((post) => post.email === id)
);

export const getComments = (id) =>
  createSelector(getAllPosts, (posts) => {
    const post = posts.find((post) => post.id === id);
    return post.comments;
  });