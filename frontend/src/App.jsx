import Nav from './components/Nav'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import MockDashboard from './pages/MockDashboard'
import Features from './pages/Features'
import Contact from './pages/Contact'
import Login from './pages/Login'

const App = () => {
  const location = useLocation()
  const hideNavOnRoutes = new Set(['/login'])
  const shouldHideNav = hideNavOnRoutes.has(location.pathname)

  return (
    <>
      {!shouldHideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<MockDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App