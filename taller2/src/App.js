import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardsProvider } from "./context/CardsProvider";
import Game from "./pages/Game";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className="container mt-5">
      <CardsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CardsProvider>
    </div>
  );
};

export default App;
