import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie", //기본 url
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjFiNGU5MzY3YzczMWQ4ZmRlODYxYzg2NTM4NDllMyIsIm5iZiI6MTcyMjMyMzYwOS42MjEsInN1YiI6IjY2YTg5Mjk5MDBhZjMwNThjZDRiYmQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XzdUpj9B8fAUTghKNqxSngTGgUijFUdQOaSmTMlvRtM",
  },
});
