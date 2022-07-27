import { Button } from "@mui/material";
import React from "react";
import useCards from "../hooks/useCards";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayButton = () => {
  const { setGetCards, getCards, endGame } = useCards();

  const play = () => {
    setGetCards(!getCards);
  };

  return (
    <>
      {!endGame ? (
        <Button variant="outlined" onClick={() => play()}>
          <PlayArrowIcon />
        </Button>
      ) : (
        <Button variant="outlined" disabled>
          <PlayArrowIcon />
        </Button>
      )}
    </>
  );
};

export default PlayButton;
