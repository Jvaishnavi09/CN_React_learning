import MovieCard from "./MovieCard";
import React from "react";
import App from "./App";
export default function MovieList(props) {
  const { movi, adstr, delStars, handlefav, handlecart } = props;
  return (
    <>
      {movi.map((movie) => (
        <MovieCard
          movi={movie}
          adstr={adstr}
          delStars={delStars}
          handlefav={handlefav}
          handlecart={handlecart}
          key={movie.id}
        />
      ))}
    </>
  );
}
