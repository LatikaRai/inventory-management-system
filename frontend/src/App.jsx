import React from 'react'
import LandingPage from './pages/LandingPage'
import Nav from './components/Nav'
import MockDashboard from './pages/MockDashboard'
import Features from './pages/Features'
import CTA from './pages/CTA'
import StatsBar from './components/StatsBar'
import Contact from './pages/Contact'
import Login from './pages/Login'

const App = () => {
  return (
    <div>
      <Nav/>
      <LandingPage/>
      <StatsBar/>
      <MockDashboard/>
      <Features/>
      <CTA/>
      <Contact/>
      <Login/>
    </div>
  )
}

export default App