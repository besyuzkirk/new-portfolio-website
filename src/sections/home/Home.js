import React from 'react'
import Navigation from '../../components/navigation/Navigation'
import Summary from '../../components/summary/Summary'
import './Home.css'

function Home() {
  return (
    <div className='content-section'>
        <Navigation />
        <Summary />
    </div>
  )
}

export default Home