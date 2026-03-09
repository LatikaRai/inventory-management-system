import { NavLink } from 'react-router-dom'
import Button from '../components/Button'

const Nav = () => {
  return (
    <div className='h-[10vh] w-full bg-black backdrop-blur-xl flex items-center justify-between px-8'>
        <div className="w-1/2">
            <NavLink to="/" className="text-white font-['Syne'] font-black text-xl">
              InvenX
            </NavLink>
        </div>
        <div className="w-1/2 text-white font-semibold flex items-center justify-center gap-12">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-[#0BAA77]' : '')}>
              Home
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => (isActive ? 'text-[#0BAA77]' : '')}>
              Features
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'text-[#0BAA77]' : '')}>
              Dashboard
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-[#0BAA77]' : '')}>
              Contact
            </NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-[#0BAA77]' : '')}>
              Login
            </NavLink>
            <NavLink to="/login">
              <Button bgColor="bg-[#0BAA77]" color="text-white" style="p-2 rounded-full font-semibold w-44">
                Get Started Free
                <i className="ri-arrow-right-long-line ml-2"></i>
              </Button>
            </NavLink>
        </div>
    </div>
  )
}

export default Nav
