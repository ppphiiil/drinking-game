import React, { useEffect } from "react";
import { useServices } from "../services/service-provider";
import { LocationType } from "../components/card";
import { ActionCard } from "../components/card/CardUI";
import { useGameStore } from "../store/game-store";
import { Container, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { CardType } from "../components/card/types";

export default function GamePage() {
  console.log("----- GamePage");

  const { gameService } = useServices();
  const { currentCard, setCurrentCard } = useGameStore();
  const history = useHistory();

  return (
    <div>
      {gameService.gameIsRunning ? (
        currentCard !== null ? (
          currentCard.type === CardType.ACTION ? (
            <ActionCard actionCard={currentCard} />
          ) : (
            <ActionCard actionCard={currentCard} />
          )
        ) : (
          <div>
            <Typography>Keine Karten mehr</Typography>
            <button>Neues Spiel</button>
          </div>
        )
      ) : (
        <div>
          <Typography>Starte ein neues Spiel</Typography>
          <Typography>Wo spielst du?</Typography>
          <button
            onClick={() => {
              gameService.setLocation(LocationType.RESTAURANT);
            }}
          >
            Restaurant
          </button>
          <button
            onClick={() => {
              gameService.setLocation(LocationType.HOME);
            }}
          >
            Zuhause
          </button>
          <Container>
            <button
              onClick={() => {
                gameService.startGame();
                setCurrentCard(gameService.nextCard());
              }}
            >
              Start Game
            </button>
          </Container>
        </div>
      )}
    </div>
  );
}
