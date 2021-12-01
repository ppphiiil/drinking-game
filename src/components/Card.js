import React, { useContext, useEffect } from 'react'
import { todos, drink, rules } from '../CardData/CardData'
import styled from 'styled-components'
import { MyContext } from '../context/MyContextContainer'

//Icons
import NextPlanIcon from '@mui/icons-material/NextPlan'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100vw;
  max-width: 500px;
  height: 100%;
  padding: 0px 10px 10px 10px;
`
const CardStyle = styled.div`
  background-color: #0b132b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-shadow: #0000006f 0px 10px 10px -4px;
  padding: 30px;
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
`

const CardTodo = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
`

const CardTitle = styled.span`
  font-size: 2rem;
`
const CardLongDescription = styled.span`
  width: 60%;
  padding-top: 20px;
  font-size: 1rem;
  line-height: 1.5rem;
`

const IconContainer = styled.div`
  margin-bottom: 20px;
`

export default function Card () {
  const { displayedCard, setDisplayedCard } = useContext(MyContext)
  const { currentPlayer, setCurrentPlayer } = useContext(MyContext)
  const { gameInfos, setGameInfos } = useContext(MyContext)
  const { skip, setSkip } = useContext(MyContext)


  const getRandomCard = () => {
     setDisplayedCard(
      getNewCard(categories[Math.floor(Math.random() * categories.length)], 1)
    )
  }

  // useEffect(() => {
  //   setDisplayedCard(getRandomCard)
  //   console.log("current player in card",currentPlayer);
  // }, [])

  useEffect(() => {
    setDisplayedCard(getRandomCard)
    
  }, [skip])

  const nextPlayer = (currentPlayer) => {
    console.log('next Player should be', gameInfos.players.indexOf(currentPlayer)+2)
    

    const playersIndex=gameInfos.players.indexOf(currentPlayer);
    const numberPlayers = gameInfos.players.length;
    let newPlayer=null;

    //Wenn letzter Spieler
    if(playersIndex<numberPlayers-1){
      newPlayer=gameInfos.players[playersIndex + 1]
    }else{
      //start from 0
      newPlayer=gameInfos.players[0]
    }

    return newPlayer;
      
  }

  const categories = ['doOrDrink', 'rules']

  const getNewCard = (category, rating) => {
    if (category === 'rules') {
      //TODO finde alle todos und drink fragen mit rating 1 und benutze nur diese.
      const newRuleCard = rules[Math.floor(Math.random() * rules.length)]

      return (
        <CardTodo>
          <IconContainer>
            <FontAwesomeIcon icon={faUsers} size='4x' />
          </IconContainer>
          <CardTitle>{newRuleCard.description}</CardTitle>
          <CardLongDescription>
            {newRuleCard.longDescription}
          </CardLongDescription>
        </CardTodo>
      )
    }
    if (category === 'doOrDrink') {
      //TODO finde alle todos und drink fragen mit rating 1 und benutze nur diese.

      return (
        <>
          <CardTodo>
            <span>
              {todos[Math.floor(Math.random() * todos.length)].description}
            </span>
          </CardTodo>
          <h2>Oder</h2>
          <CardTodo>
            <span>
              {drink[Math.floor(Math.random() * drink.length)].description}
            </span>
          </CardTodo>
        </>
      )
    }
  }

  return (
    <CardContainer>
      <CardStyle>
        <>
          {displayedCard}
          <div
            style={{ textAlign: 'right', cursor: 'pointer' }}
            onClick={() => {
               console.log('last currentPlayer', currentPlayer)
               setCurrentPlayer(nextPlayer(currentPlayer))
               console.log('new currentPlayer', currentPlayer)
              getRandomCard();
            }}
          >
            <NextPlanIcon></NextPlanIcon>
          </div>
        </>
      </CardStyle>
    </CardContainer>
  )
}
