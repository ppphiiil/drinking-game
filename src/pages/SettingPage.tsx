import React from "react";
import { useServices } from "../services/service-provider";
import { useHistory } from "react-router-dom";
import { Typography } from "@mui/material";
import { LocationType } from "../components/card";

export default function SettingPage() {
  const { gameService } = useServices();
  const history = useHistory();

  return (
    <div>
      <Typography>Spiel beenden</Typography>

      <button
        onClick={() => {
          gameService.stopGame();
          // history.replace("/");
        }}
      >
        Spiel beenden
      </button>
    </div>
  );
}
