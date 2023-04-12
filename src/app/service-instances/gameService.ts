import {GameService} from "../../services/game-service/game-service";
import {CardDeckService} from "../../services/card-deck/card-deck";
import {cardDeck} from "./cardDeckService";



export const gameService=new GameService(cardDeck)
