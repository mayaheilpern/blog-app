import {apiGet, apiPost, apiDelete, apiPut} from "./apiConfig.js";

export const getPosts = async () => {
  try {
    const response = await apiGet(`users`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPost = async (id) => {
  try {
    const response = await apiGet(`users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (product) => {
  try {
    const response = await apiPost(`create`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, post) => {
  try {
    const response = await apiPut(`update`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await apiDelete(`delete`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
