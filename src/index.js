import React from 'react'
import App from './App.js'
import reactDOM from 'react-dom'
import { HashRouter} from 'react-router-dom'

//MyContext API
import {MyContextContainer} from './context/MyContextContainer'

reactDOM.render(
  <MyContextContainer>
    <HashRouter>
      <App />
    </HashRouter>
  </MyContextContainer>,
  document.getElementById('root')
)
