import axios from "axios";

const BaseURL = "https://radiant-sierra-20133.herokuapp.com/api/";

export const getPosts = (token) =>
  axios({
    url: `${BaseURL}users`,
    headers: {Authorization: `${token}`},
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const createUser = (props) =>
  axios({
    method: "post",
    url: `${BaseURL}signup`,
    data: props,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const loginUser = (props) =>
  axios({
    method: "post",
    url: `${BaseURL}login`,
    data: props,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const getUserPosts = (props) =>
  // console.log(props)

  axios({
    url: `${BaseURL}user${props}`,
  })
    .then((response) => {
      // console.log(response.data)
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

export const createPost = (id, blog, token) =>
  axios({
    method: "post",
    url: `${BaseURL}post/${id}`,
    headers: {Authorization: `${token}`},
    data: blog,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });


export const apiPut = (postid,token,post) =>  axios({
  method: "put",
  url: `${BaseURL}user/update/${postid}`,
  headers: { Authorization: `${token}` },
  date:[post]

})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

export const apiDelete = (id,token,postid) => 
  axios({
    method: "delete",
    url: `${BaseURL}delete/${id}/${postid}`,
    headers: { Authorization: `${token}` }
  })
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

