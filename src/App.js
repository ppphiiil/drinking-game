import React from 'react'
//Router

import { Routes, Route, Link } from 'react-router-dom'

//Components
import NavigationTop from './components/NavigationTop'
import NavigationBottom from './components/NavigationBottom'

//pages
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'

//Style
import styled from 'styled-components'
import './Reset.css'


function App () {
  const AppContainer = styled.div`
    height: 100%;
    font-size: 2rem;
    width: 100vw;
  `

  const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 1rem;
    position: relative;
    width:100%;
  `

  const Pages = styled.div`
  
   display: flex;
   justify-content:center;
   align-items: stretch;
  flex-grow: 1;
  padding:10px;
  width:100%;
  `

  return (
    <AppContainer>
      <PageContainer>
        <NavigationTop />
        <Pages>
        <Routes>
        
          <Route path='/' element={<StartPage />}></Route>
          <Route path='/game' element={<GamePage />}></Route>
        
        </Routes>
        </Pages>
        <NavigationBottom />
      </PageContainer>
    </AppContainer>
  )
}

export default App
