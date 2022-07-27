import React, { useEffect, useState } from "react";
import useCards from "../hooks/useCards";
import { Grid, Stack } from "@mui/material";
import CardItem from "./CardItem";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ObtainedCards = () => {
  const { cardsPlayer1, cardsPlayer2, setEndGame } = useCards();

  const [win, setWin] = useState(false);

  const [winP1, setWinP1] = useState(false);

  const [winP2, setWinP2] = useState(false);

  const [optionCards1, setOptionCards1] = React.useState([]);

  const [optionCards2, setOptionCards2] = React.useState([]);

  useEffect(() => {
    cardsPlayer1.map((cardItem) => {
      const aux = cardItem;
      cardsPlayer1.map((cardItemm) => {
        if (aux.code !== cardItemm.code && aux.value === cardItemm.value) {
          setOptionCards1([aux, cardItemm]);
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
          setOptionCards2([aux, cardItemm]);
          setWinP2(true);
        }
      });
    });
  }, [cardsPlayer2]);

  useEffect(() => {
    if (winP1 || winP2) {
      if (winP1 && winP2) {
        checkWin();
      }
      console.log(optionCards1, optionCards2);
      setWin(true);
      setEndGame(true);
    }
  }, [winP1, winP2]);

  const checkWin = () => {
    if (optionCards1[0].suit !== optionCards2[0].suit) {
      const suit1 = checkSuit(optionCards1[0].suit);
      const suit2 = checkSuit(optionCards2[0].suit);
      if (suit1 < suit2) {
        setWinP2(false);
        return;
      }
      setWinP1(false);
      return;
    }
    const suit1 = checkSuit(optionCards1[1].suit);
    const suit2 = checkSuit(optionCards2[1].suit);
    if (suit1 < suit2) {
      setWinP2(false);
      return;
    }
    setWinP1(false);
    return;
  };

  const checkSuit = (suit) => {
    if (suit === "HEARTS") {
      return 0;
    }
    if (suit === "SPADES") {
      return 1;
    }
    if (suit === "DIAMONDS") {
      return 2;
    }
    if (suit === "CLUBS") {
      return 3;
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2}>
        {win ? (
          winP1 ? (
            <>
              <Grid container spacing={2}>
                {optionCards1.map((card) => (
                  <CardItem cardItem={card} />
                ))}
              </Grid>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12} lg={8}>
                  <h2>Jugador 1 ganó!!!! {<FavoriteIcon />}</h2>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Grid container spacing={2}>
                <Grid item md={4} xs={12} lg={8}>
                  <h2>Jugador 2 ganó!!! {<FavoriteIcon />}</h2>
                </Grid>
              </Grid>
              <Grid container spacing={2}>
                {optionCards2.map((card) => (
                  <CardItem cardItem={card} />
                ))}
              </Grid>
            </>
          )
        ) : (
          <Grid container>
            <Grid item md={4} xs={12} lg={8}>
              <h2>Juego en progreso</h2>
            </Grid>
          </Grid>
        )}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={3} className="mt-1">
          {cardsPlayer1.map((card) => (
            <CardItem cardItem={card} />
          ))}
        </Grid>
        <Grid container spacing={3} className="mt-1">
          {cardsPlayer2.map((card) => (
            <CardItem cardItem={card} />
          ))}
        </Grid>
      </Stack>
    </>
  );
};

export default ObtainedCards;
