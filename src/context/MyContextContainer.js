import { createContext,useState } from "react";

export const MyContext = createContext(null);

 const newGame = {
    players: [
      {
        name: 'Spieler 1',
        gender: 'male',
        activeCards: [],
        cardHistory: []
      },
       {
        name: 'Spieler 2',
        gender: 'male',
        activeCards: [],
        cardHistory: []
      }
    ],
    gameSettings: {},
    cardHistoryAll:[],
    round: 0,

  }


export const MyContextContainer = ({children}) =>{
    // const [login,setLogin] = useState();
    const [page, setPage] = useState(0);
    const [displayedCard, setDisplayedCard] = useState(null);
    const [gameInfos, setGameInfos] = useState(newGame);
    const [skip, setSkip] = useState(false);
    const firstPlayerStarts=newGame.players[0];
    
    const [currentPlayer, setCurrentPlayer] = useState(firstPlayerStarts);
   
    

    return(
        <MyContext.Provider
        value={{
            // login,
            // setLogin
            page,
            setPage,
            displayedCard,
            setDisplayedCard,
            gameInfos,
            setGameInfos,
            currentPlayer, 
            setCurrentPlayer,
            skip, setSkip
        }}>
            {children}
        </MyContext.Provider>
    )
}

