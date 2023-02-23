import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "374a020086eadfe213de81457e456d8d",
    language: "ko-KR",
  },
});

export default instance;
