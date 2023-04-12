import React from 'react'

import App from './app/App.js'
import reactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

//MyContext API
import { MyContextContainer } from './old/MyContextContainer'

reactDOM.render(
  <MyContextContainer>
    <App />
  </MyContextContainer>,
  document.getElementById('root')
)
