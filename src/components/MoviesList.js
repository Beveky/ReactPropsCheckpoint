import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "200px",
      }}
    >
      {data.map((el, index) => (
        <MovieCard key={index} movieInfo={el} />
      ))}
    </div>
  );
};

export default MoviesList;
