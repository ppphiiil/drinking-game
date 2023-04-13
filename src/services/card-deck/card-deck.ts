import {
  Card,
  CardDeck,
  CardType,
  DifficultyRating,
  DrinkInstruction,
  LocationType,
} from "../../components/card/types";

import { v4 as uuid } from "uuid";

export class CardDeckService {
  private cards: Card[] = [];
  private index: number = 0;

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  private filterByLocation(location: LocationType): CardDeck {
    console.log("filterByLocation this.cards", this.cards);
    const filteredCards = this.cards.filter((card) =>
      card.location.includes(location)
    );
    console.log("filteredCards", filteredCards);
    return filteredCards;
  }

  // Diese Methode gibt das aktuelle Deck zurück.
  getCardDeckByLocation(location: LocationType): CardDeckService {
    const newCardDeck = this.filterByLocation(location);

    return new CardDeckService(this.shuffle(newCardDeck));
  }

  shuffle(deck: Card[]): Card[] {
    const shuffledDeck = [...deck];
    for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
    }
    return shuffledDeck;
  }

  getNextCard(): Card | null {
    if (this.index > this.cards.length - 1) return null;
    const card = this.cards[this.index];
    this.index++;
    return card;
  }
}
