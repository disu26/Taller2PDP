import { Stack, Grid } from "@mui/material";
import React from "react";
import ObtainedCards from "../components/ObtainedCards";
import PlayButton from "../components/PlayButton";
import Player from "../components/Player";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const Game = () => {
  return (
    <Stack direction="column" spacing={4}>
      <Grid item>
        <NavLink to="/">{<HomeIcon />}</NavLink>
      </Grid>
      <Stack direction="row" spacing={3}>
        <Grid container>
          <Player index={1} />
        </Grid>
        <PlayButton />
        <Grid container className="mx-5">
          <Player index={2} />
        </Grid>
      </Stack>
      <ObtainedCards />
    </Stack>
  );
};

export default Game;
