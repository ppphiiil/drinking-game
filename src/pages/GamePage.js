import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import { MyContext } from '../context/MyContextContainer'


export default function GamePage () {
  const { page, setPage } = useContext(MyContext)



 
  useEffect(() => {
      setPage(0);
   
  }, [])



  const playGame = () =>{



    
    return  <Card/>

  }

  return (
    <div>
      {/* Gife me the first Card */}
      {playGame()}
     
    </div>
  )
}
