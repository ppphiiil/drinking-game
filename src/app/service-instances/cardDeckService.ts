import { CardDeckService } from "../../services/card-deck/card-deck";
import { allCards } from "../../data";

export const cardDeck = new CardDeckService(allCards);
