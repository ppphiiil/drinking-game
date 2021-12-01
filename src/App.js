import React from 'react'

//Router

import { HashRouter, Switch, Route, Link } from 'react-router-dom'

//Components
import NavigationTop from './components/NavigationTop'
import NavigationBottom from './components/NavigationBottom'

//pages
import StartPage from './pages/StartPage'
import GamePage from './pages/GamePage'

//Style
import styled from 'styled-components'
import './Reset.css'
require('dotenv').config()

console.log(
  'app process.env.PUBLIC_URL',
  process.env.REACT_APP_PUBLIC_URL + '/'
)

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
  width: 100%;
`

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-grow: 1;
  padding: 10px;
  width: 100%;
`

function App () {
  return (
    <HashRouter>
      <AppContainer>
        <PageContainer>
          <NavigationTop />
          <Pages>
            <Switch>
              <Route exact path={process.env.REACT_APP_PUBLIC_URL + '/'}>
                <StartPage />
              </Route>
              <Route path={process.env.REACT_APP_PUBLIC_URL + '/game'}>
                <GamePage />
              </Route>
            </Switch>
          </Pages>
          <NavigationBottom />
        </PageContainer>
      </AppContainer>
    </HashRouter>
  )
}

export default App
