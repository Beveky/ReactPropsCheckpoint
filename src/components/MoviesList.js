import React from "react";
<<<<<<< HEAD:src/PlayersList.js
import playersData from "./players";
import PlayerCard from "./Player";
=======
import MovieCard from "./MovieCard";
>>>>>>> 85194fb422e4d38858c334ee78363e29e13e8d86:src/components/MoviesList.js

const MoviesList = ({ data }) => {
  return (
<<<<<<< HEAD:src/PlayersList.js
    <div>
      {playersData.map((player, index) => (
        <PlayerCard Key={index} {...player} />
=======
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
>>>>>>> 85194fb422e4d38858c334ee78363e29e13e8d86:src/components/MoviesList.js
      ))}
    </div>
  );
};

export default MoviesList;
