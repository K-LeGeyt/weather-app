import React from 'react'

import Search from './Search'
import Weather from './Weather'
import Forecast from './Forecast'
import Header from './Header'

function App () {
  return (
    <>
      <Header />
      <div data-testid='apptest' className='app'>
        <Search />
        <Weather />
        <Forecast />
      </div>
    </>
  )
}

export default App
