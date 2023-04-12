import { Card, LocationType } from "../../components/card/types";
import { CardDeckService } from "../card-deck/card-deck";

export class GameService {
  private cardDeck: CardDeckService;
  gameIsRunning: boolean = false;
  currentCardDeck: CardDeckService;
  location: LocationType = LocationType.HOME;
  currentCard: Card | null;
  playedCards: Card[] = [];

  constructor(cardDeck: CardDeckService) {
    console.log("---- GameService constructor");
    this.cardDeck = cardDeck;
    this.currentCardDeck = cardDeck;
    this.currentCard = null;
  }

  initGame() {
    this.gameIsRunning = true;
    this.currentCard = null;
  }
  startGame(location?: LocationType) {
    this.initGame();
    this.currentCardDeck = this.cardDeck.getCardDeckByLocation(
      location ? location : this.location
    );
    console.log("this.currentCardDeck", this.currentCardDeck);
    this.currentCard = this.currentCardDeck.getNextCard();
  }

  stopGame() {
    this.gameIsRunning = false;
    this.playedCards = [];
  }

  nextCard() {
    this.currentCard = this.currentCardDeck.getNextCard();
    if (this.currentCard !== null) {
      this.playedCards.push(this.currentCard);
    }
    return this.currentCard;
  }

  setLocation(location: LocationType) {
    console.log("setLocation", location);
    this.location = location;
  }
}
