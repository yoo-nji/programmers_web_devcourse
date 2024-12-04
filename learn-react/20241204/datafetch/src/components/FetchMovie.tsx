import axios from "axios";
import { useEffect } from "react";

export default function FetchMovie() {
  const getMovie = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      {
        method: "GET", //대문자
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGY5ZGVmN2EzMzJhNTEyZmIwZDhlMzJiOTRkNWNmNCIsIm5iZiI6MTcyMjMyMzYwOS42MjEsInN1YiI6IjY2YTg5Mjk5MDBhZjMwNThjZDRiYmQ1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.buhkGGYszxQXky_cDlxEa_iyk8Twd9ZLcTs_LMmJVnc",
        },
      }
    );
    console.log(data);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <h1>FetchMovie</h1>
    </>
  );
}
