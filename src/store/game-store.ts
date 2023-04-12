
import { create } from "zustand";
import { Card } from "../components/card";
import {CardDeckService} from "../services/card-deck/card-deck";

export  interface GameState {
      currentCard: Card | null;
      gameIsRunning:boolean,
      setCurrentCard:(newCard:Card|null)=>void
      setGameIsRunning:(prev:boolean)=>void,
}

export const useGameStore = create<GameState>((set) => ({
      currentCard: null,
      gameIsRunning:false,
      setCurrentCard: (newCard) =>
      set((state) => ({ ...state,currentCard: newCard })),
      setGameIsRunning: (gameIsRunning) =>
              set((state) => ({ ...state,gameIsRunning: gameIsRunning })),
}));
