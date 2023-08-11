import './index.css'
import React from 'react'
import Farms from './screens/Farms'
import AppBody from '../pages/AppBody'
import { SwapPoolTabs } from '../components/NavigationTabs'

function App() {
  return (
    <AppBody>
      <SwapPoolTabs active={'farm'} />
      <div className="App bg-slati h-screen">
        <div className="md:px-24 py-3 p-5">
          <Farms />
        </div>
      </div>
    </AppBody>
  )
}

export default App
