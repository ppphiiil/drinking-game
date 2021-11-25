import React from 'react'
import App from './App.js'
import reactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//MyContext API
import {MyContextContainer} from './context/MyContextContainer'

reactDOM.render(
  <MyContextContainer>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextContainer>,
  document.getElementById('root')
)
