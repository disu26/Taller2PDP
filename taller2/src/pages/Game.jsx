import { Stack } from "@mui/material";
import React from "react";
import ObtainedCards from "../components/ObtainedCards";
import PlayButton from "../components/PlayButton";
import { CardsProvider } from "../context/CardsProvider";
import useCards from "../hooks/useCards";

const Game = () => {
  //const { player1, player2 } = useCards();

  return (
    <CardsProvider>
      <Stack direction="column" spacing={4}>
        <Stack direction="row" spacing={3}>
            <h1>Jugador 1: Pedro Perez</h1>
          <PlayButton />
            <h1>Jugador 2: Pablo Motos</h1>
        </Stack>
        <ObtainedCards />
      </Stack>
    </CardsProvider>
  );
};

export default Game;
