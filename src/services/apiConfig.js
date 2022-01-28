import axios from "axios";

const BaseURL = "https://crud-class-exercise.herokuapp.com/api/";

export const apiGet = axios({
  url: `${BaseURL}`,
})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

export const apiPost = axios({
  method: "post",
  url: `${BaseURL}`,
})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

export const apiPut = axios({
  method: "put",
  url: `${BaseURL}`,
})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

export const apiDelete = axios({
  method: "delete",
  url: `${BaseURL}`,
})
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });
