import React from "react";
import { useServices } from "../services/service-provider";
import { useHistory } from "react-router-dom";
import { Chip, Typography } from "@mui/material";
import { LocationType } from "../components/card";
import { PrimaryButton } from "@ppphiiil/mvp-system";
import { Headline } from "./styles";

export default function SettingPage() {
  const { gameService } = useServices();
  const history = useHistory();

  return (
    <div>
      <Headline variant={"h2"}>Spiel beenden</Headline>

      <PrimaryButton
        onClick={() => {
          gameService.stopGame();
          history.replace("/");
        }}
      >
        Spiel beenden
      </PrimaryButton>
    </div>
  );
}
