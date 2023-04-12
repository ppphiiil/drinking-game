import NextPlanIcon from "@mui/icons-material/NextPlan";
import { Divider, styled, Typography } from "@mui/material";

import { Card, DrinkInstruction } from "./types";
import { useServices } from "../../services/service-provider";
import { useGameStore } from "../../store/game-store";

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "stretch",
  width: "100vw",
  maxWidth: "500px",
  height: "100%",
  padding: "10px 10px 10px 10px",
}));

const CardStyle = styled("div")(({ theme }) => ({
  backgroundColor: "#131e47",
  borderRadius: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  boxShadow: "#0000006f 0px 10px 10px -4px",
  padding: "30px",
  color: "white",
  width: "100%",
  height: "100%",
  textAlign: "center",
}));

const CardTodo = styled("div")(({ theme }) => ({
  height: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CardTitle = styled("div")(({ theme }) => ({
  fontSize: "2.3rem",
  width: "100%",
}));
const Consequence = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  paddingTop: 40,
  width: "100%",
}));
const Description = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  width: "100%",
}));

interface Props {
  actionCard: Card;
}

export const ActionCard = ({ actionCard }: Props) => {
  const { gameService } = useServices();
  const { setCurrentCard } = useGameStore();
  return (
    <CardContainer>
      <CardStyle>
        <>
          <CardTodo>
            <CardTitle>{actionCard.title}</CardTitle>
            <Divider />
          </CardTodo>

          <CardTodo>
            <Description textAlign={"left"} variant={"subtitle1"}>
              {actionCard.description}
            </Description>
            <Consequence textAlign={"left"} variant={"subtitle1"}>
              {actionCard.consequence}
            </Consequence>
          </CardTodo>
          <div
            style={{ textAlign: "right", cursor: "pointer" }}
            onClick={() => {
              console.log("next card");
              setCurrentCard(gameService.nextCard());
            }}
          >
            <NextPlanIcon />
          </div>
        </>
      </CardStyle>
    </CardContainer>
  );
};
