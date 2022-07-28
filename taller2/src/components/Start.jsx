import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import useCards from "../hooks/useCards";
import { Grid } from "@mui/material";

const Start = () => {
  const { setStart, updateNames } = useCards();
  const [p1, setP1] = useState("");
  const [p2, setP2] = useState("");

  const onChange = ({ target }) => {
    if (target.id === "player1") {
      setP1(target.value);
      return;
    }
    setP2(target.value);
  };

  const start = () => {
    updateNames(p1, p2);
    setStart(true);
  };

  return (
    <Stack
      direction="column"
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <TextField
          id="player1"
          label="Jugador #1"
          variant="outlined"
          onChange={onChange}
        />
      </Grid>

      <Grid item>
        <TextField
          id="player2"
          label="Jugador #2"
          variant="outlined"
          onChange={onChange}
        />
      </Grid>

      <Grid item>
        {p1.length > 0 && p2.length > 0 ? (
          <Button variant="outlined" onClick={() => start()}>
            <NavLink to="/game">Iniciar</NavLink>
          </Button>
        ) : (
          <Button variant="outlined" disabled>
            Iniciar
          </Button>
        )}
      </Grid>
    </Stack>
  );
};

export default Start;
