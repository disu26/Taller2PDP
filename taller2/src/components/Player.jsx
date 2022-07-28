import React from "react";
import useCards from "../hooks/useCards";

const Player = ({ index }) => {
  const {player1, player2} = useCards();

  return (
    <>
      <h1>
        Jugador {index}: {index === 1 ? player1 : player2}
      </h1>
    </>
  );
};

export default Player;
