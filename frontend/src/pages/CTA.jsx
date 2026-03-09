import Button from "../components/Button"
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center bg-black text-white text-center'>
      <div className='h-[80vh] w-[80vw] flex flex-col items-center justify-center gap-8 bg-gray-500/20 rounded-4xl border border-gray-200/20'>
        <h2 className='text-[#0EB27C] font-semibold bg-green-200/20 rounded-full border border-[#0EB27C]/60 py-1 px-3'>Ready to go?</h2>
        <h1 className='text-5xl leading-16 font-black font-["Syne"]'>Take control of your <br /><span className='text-[#0EB27C]'>inventory today</span></h1>
        <h2 className='text-lg text-gray-400'>Join your team and never lose track of stock again.</h2>
        <div className="flex items-center justify-center gap-6">
          <Link to="/dashboard">
            <Button bgColor="bg-[#0BAA77]" color="text-white" style="py-4 rounded-lg font-semibold w-46">
              Open the App
              <i className="ri-arrow-right-long-line ml-1"></i>
            </Button>
          </Link>
          <Link to="/login">
            <Button
              bgColor="bg-gray-900/30"
              color="text-gray-400"
              style="py-4 rounded-lg font-semibold w-30 border border-white/20 "
            >
              Login
            </Button>
          </Link>
        </div>
          
      </div>
    </div>
  )
}

export default CTA
