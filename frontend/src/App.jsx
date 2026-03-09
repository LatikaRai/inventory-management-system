import React from 'react'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import MockDashboard from './pages/MockDashboard'
import Featues from './pages/Featues'
import CTA from './pages/CTA'
import StatsBar from './components/StatsBar'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Nav/>
      <LandingPage/>
      <StatsBar/>
      <MockDashboard/>
      <Featues/>
      <CTA/>
      <Contact/>
    </div>
  )
}

export default App