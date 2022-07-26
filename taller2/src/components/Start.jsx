import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import useCards from '../hooks/useCards';

const Start = () => {
    const { setStart, setPlayer1, setPlayer2 } = useCards();
    const [player1, setPlayer1Value] = useState('');
    const [player2, setPlayer2Value] = useState('');
    
    const onChange = ({ target }) => {
        if (target.id === 'player1') {
            setPlayer1Value(target.value);
            return;
        }
        setPlayer2Value(target.value);
    }

    const start = () => {
        setPlayer1(player1);
        setPlayer2(player2);
        setStart(true);
    }

  return (
    <Box component="form" sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }} noValidate autoComplete="off">
        <div>
           <TextField id="player1" label="Jugador #1" variant="outlined" onChange={onChange}/>
        </div>

        <div className='mt-4'>
            <TextField id="player2" label="Jugador #2" variant="outlined" onChange={onChange}/>
        </div>

        <div className='mt-4'>
            <Button variant="outlined" onClick= {() => start()}>
                <NavLink to="/game">
                    Iniciar
                </NavLink>
            </Button>
        </div>
    </Box>
  )
}

export default Start