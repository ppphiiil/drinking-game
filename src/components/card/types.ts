export enum DrinkInstructionsType {
  SIP = "SIP",
  SHOT = "SHOT",
}

export enum LocationType {
  RESTAURANT = "RESTAURANT",
  HOME = "HOME",
  OUTDOOR = "OUTDOOR",
}

export enum CardType {
  ACTION = "ACTION",
  RULE = "RULE",
}
export interface DrinkInstruction {
  type: DrinkInstructionsType;
  amount: number;
}

export type DifficultyRating = 1 | 2 | 3 | 4 | 5;

export interface BaseCard {
  id: string;
  difficulty: DifficultyRating;
  location: LocationType[];
}

export interface ActionCard extends BaseCard {
  type: CardType.ACTION;
  title: string;
  description: string;
  consequence: string;
}

export interface RuleCard extends BaseCard {
  type: CardType.RULE;
  title: string;
  description: string;
  consequence: string;
}

export type Card = ActionCard | RuleCard;

export type CardDeck = Card[];
