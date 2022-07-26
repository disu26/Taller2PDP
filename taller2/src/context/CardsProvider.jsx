import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [cardsPlayer1, setCardsPlayer1] = useState([]);
  const [cardsPlayer2, setCardsPlayer2] = useState([]);
  const [player1, setPlayer1] = useState("Pedro");
  const [player2, setPlayer2] = useState("Pablo");
  const [gameId, setGameId] = useState("");
  const [start, setStart] = useState(false);
  const [getCards, setGetCards] = useState(false);

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

  return (
    <CardsContext.Provider
      value={{
        cardsPlayer1,
        cardsPlayer2,
        setStart,
        setGetCards,
        getCards,
        setPlayer1,
        setPlayer2,
        player1,
        player2,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export { CardsProvider };
export default CardsContext;
