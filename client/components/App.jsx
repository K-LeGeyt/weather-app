import React from 'react'

import Search from './Search'
import Weather from './Weather'

import Header from './Header'
import ErrMessage from './ErrMessage'
import WaitIndicator from './WaitIndicator'

function App() {
  return (
    <>
      <Header />
      <div data-testid="apptest" className="app">
        <ErrMessage />
        <Search>
          <WaitIndicator />
        </Search>
        <Weather />
      </div>
    </>
  )
}

export default App
