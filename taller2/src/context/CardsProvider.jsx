import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [cardsPlayer1, setCardsPlayer1] = useState([]);
  const [cardsPlayer2, setCardsPlayer2] = useState([]);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gameId, setGameId] = useState("");
  const [start, setStart] = useState(false);
  const [getCards, setGetCards] = useState(false);
  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    const startGame = async () => {
      const url = "http://deckofcardsapi.com/api/deck/new/shuffle/";
      const { data } = await axios.get(url);
      setGameId(data.deck_id);
    };
    startGame();
  }, [start]);

  useEffect(() => {
    const get2Cards = async () => {
      const url = `http://deckofcardsapi.com/api/deck/${gameId}/draw/?count=2`;
      const { data } = await axios.get(url);
      setCardsPlayer1([...cardsPlayer1, data.cards[0]]);
      setCardsPlayer2([...cardsPlayer2, data.cards[1]]);
    };
    if (gameId === "") {
      return;
    }
    get2Cards();
  }, [getCards]);

  const updateNames = (name1, name2) => {
    setPlayer1(name1);
    setPlayer2(name2);
  };

  return (
    <CardsContext.Provider
      value={{
        cardsPlayer1,
        cardsPlayer2,
        setStart,
        setGetCards,
        getCards,
        updateNames,
        player1,
        player2,
        setEndGame,
        endGame,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
export default CardsContext;
