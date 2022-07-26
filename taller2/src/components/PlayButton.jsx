import { Button } from "@mui/material";
import React from "react";
import useCards from "../hooks/useCards";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const PlayButton = () => {
  const { setGetCards, getCards } = useCards();

  const play = () => {
    setGetCards(!getCards);
  };

  return (
    <Button variant="outlined" onClick={() => play()}>
      <PlayArrowIcon />
    </Button>
  );
};

export default PlayButton;
