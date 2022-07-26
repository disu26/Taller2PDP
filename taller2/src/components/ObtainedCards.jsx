import React, { useEffect, useState } from "react";
import useCards from "../hooks/useCards";
import { Grid, Stack } from "@mui/material";
import CardItem from "./CardItem";

const ObtainedCards = () => {
  const { cardsPlayer1, cardsPlayer2 } = useCards();

  const [win, setWin] = useState(false);
  
  const [winP1, setWinP1] = useState(false);

  const [winP2, setWinP2] = useState(false);

  const [optionCards, setOptionCards] = React.useState([]);

  useEffect(() => {
    cardsPlayer1.map((cardItem) => {
      const aux = cardItem;
      cardsPlayer1.map((cardItemm) => {
        if (aux.code !== cardItemm.code && aux.value === cardItemm.value) {
          setOptionCards([aux, cardItemm]);
          setWinP1(true);
        }
      });
    });
  }, [cardsPlayer1]);

  useEffect(() => {
    cardsPlayer2.map((cardItem) => {
      const aux = cardItem;
      cardsPlayer2.map((cardItemm) => {
        if (aux.code !== cardItemm.code && aux.value === cardItemm.value) {
          setOptionCards([aux, cardItemm]);
          setWinP2(true);
        }
      });
    });
  }, [cardsPlayer2]);

  useEffect(() => {
    if (winP1 || winP2) {
      setWin(true);
    }
  }, [winP1, winP2]);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        {win ? (
          winP1 ? (
            <>
              <Grid container spacing={2}>
                {optionCards.map((card) => (
                  <CardItem cardItem={card} />
                ))}
              </Grid>
              <Grid container spacing={2}>
                <p>Jugador 1 ganó</p>
              </Grid>
            </>
          ) : (
            <>
              <Grid container spacing={2}>
                <p>Jugador 2 ganó</p>
              </Grid>
              <Grid container spacing={2}>
                {optionCards.map((card) => (
                  <CardItem cardItem={card} />
                ))}
              </Grid>
            </>
          )
        ) : (
          <Grid container spacing={2}>
            <p>Juego en progreso</p>
          </Grid>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={3}>
          {cardsPlayer1.map((card) => (
            <CardItem cardItem={card} />
          ))}
        </Grid>
        <Grid container spacing={3}>
          {cardsPlayer2.map((card) => (
            <CardItem cardItem={card} />
          ))}
        </Grid>
      </Stack>
    </div>
  );
};

export default ObtainedCards;
