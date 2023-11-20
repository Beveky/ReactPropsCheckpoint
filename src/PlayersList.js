import React from "react";
import playersData from "./players";
import PlayerCard from "./Player";

const PlayersList = () => {
  return (
    <div>
      {playersData.map((player, index) => (
        <PlayerCard Key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
