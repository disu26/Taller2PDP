import React from "react";
import Start from "../components/Start";
import useCards from "../hooks/useCards";

const HomePage = () => {
  const {endGame, setEndGame} = useCards();

  if(endGame) {
    window.location.reload();
    setEndGame(false);
  }

  return <Start />;
};

export default HomePage;
