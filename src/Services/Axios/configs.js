import axios from "axios";

// export default axios.create({
//   baseURL: "https://react-mini-projects-api.classbon.com",
// });

const axiosApi = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
  timeout: 2000,
  // headers: {
  //   Authorization: "Bearer MY_TOKEN",
  //   "Content-Type": "application/json",
  //   "Accept-Language": "en-US",

  // },
  // params:{

  // }
});

export default axiosApi;
