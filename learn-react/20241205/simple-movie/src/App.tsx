import MovieArea from "./components/MovieArea";
import MovieHeader from "./components/MovieHeader";
import MovieMain from "./components/MovieMain";
import { useEffect, useState } from "react";
import { axiosInstance } from "./api/axios";

export default function App() {
  const [nowPlaying, setNowPlaying] = useState<MovieItem[]>([]);
  const [popular, setPopular] = useState<MovieItem[]>([]);
  const [upcoming, setUpcoming] = useState<MovieItem[]>([]);

  const getMovieNowPlaying = async () => {
    const {
      data: { results }, //비구조화할당
    } = await axiosInstance.get("/now_playing");
    setNowPlaying(results);
    console.log(results);
  };

  const getMoviePopular = async () => {
    const {
      data: { results }, //비구조화할당
    } = await axiosInstance.get("/popular");
    setPopular(results);
  };

  const getMovieUpcoming = async () => {
    const {
      data: { results }, //비구조화할당
    } = await axiosInstance.get("/upcoming");
    setUpcoming(results);
  };

  useEffect(() => {
    getMovieNowPlaying();
    getMoviePopular();
    getMovieUpcoming();
  }, []);
  return (
    <>
      {/* 헤더 */}
      <MovieHeader />
      {/* 메인 */}
      <MovieMain />
      {/* 무비 에어리어 */}
      <MovieArea movies={nowPlaying} title="Now Playing" />
      <MovieArea movies={popular} title="Popular" />
      <MovieArea movies={upcoming} title="Upcoming" />
    </>
  );
}
