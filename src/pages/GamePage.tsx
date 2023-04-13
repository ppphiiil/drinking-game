import React, { useState } from "react";
import { useServices } from "../services/service-provider";
import { LocationType } from "../components/card";
import { ActionCard } from "../components/card/CardUI";
import { useGameStore } from "../store/game-store";
import { Chip, Container, styled, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { CardType } from "../components/card/types";
import { PrimaryButton } from "@ppphiiil/mvp-system";
import { Headline, SubHeadline } from "./styles";

export const ChipContainer = styled("div")(({ theme }) => ({}));

const StyledPrimaryButton = styled(PrimaryButton)(({ theme }) => ({
  margin: theme.spacing(3),
}));
const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
export default function GamePage() {
  console.log("----- GamePage");

  const { gameService } = useServices();
  const { currentCard, setCurrentCard } = useGameStore();
  const [location, setLocation] = useState<LocationType>(LocationType.HOME);
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
            <Headline>Keine Karten mehr</Headline>
            <PrimaryButton>Neues Spiel</PrimaryButton>
          </div>
        )
      ) : (
        <div>
          <Headline variant={"h2"}>Starte ein neues Spiel</Headline>
          <SubHeadline variant={"h3"}>Wo spielst du?</SubHeadline>
          <ChipContainer>
            <StyledChip
              label={"Restaurant"}
              color="primary"
              variant={
                location === LocationType.RESTAURANT ? "filled" : "outlined"
              }
              onClick={() => {
                setLocation(LocationType.RESTAURANT);
              }}
            />

            <StyledChip
              label={"Zuhause"}
              color="primary"
              variant={location === LocationType.HOME ? "filled" : "outlined"}
              onClick={() => {
                setLocation(LocationType.HOME);
              }}
            />
          </ChipContainer>
          <Container>
            <StyledPrimaryButton
              onClick={() => {
                gameService.setLocation(location);
                gameService.startGame();
                setCurrentCard(gameService.nextCard());
              }}
            >
              Start Game
            </StyledPrimaryButton>
          </Container>
        </div>
      )}
    </div>
  );
}
