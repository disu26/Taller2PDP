import React from "react";
import { useMatch } from "react-router-dom";

const Player = ({ index }) => {
  const {
    params: { player1, player2 },
  } = useMatch("/game/:player1/:player2");

  return (
    <>
      <h1>
        Jugador {index}: {index === 1 ? player1 : player2}
      </h1>
    </>
  );
};

export default Player;
