import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='h-screen w-full p-4 bg-black text-white flex items-center'>
        <div className='relative h-full w-1/2 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#041B18] via-[#052F2B] to-[#020B10] flex flex-col'>
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-30 -left-30 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.45),transparent_62%)] blur-2xl" />
              <div className="absolute -bottom-36 -right-36 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-2xl" />
              <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_42%,transparent_58%)] opacity-60" />
              <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_25%_15%,rgba(16,185,129,0.14),transparent_45%),radial-gradient(circle_at_75%_85%,rgba(59,130,246,0.12),transparent_46%)]" />
              <div className="absolute left-0 top-0 h-full w-full opacity-[0.25] bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_10px)]" />
            </div>

            <div className="relative">
                <h1 className="text-white font-['Syne'] font-black text-xl p-4">InvenX</h1>
                <div className='text-[#10B981]'>
                    <Link to="/" className="flex items-center gap-2 px-4 pb-2 w-fit hover:text-white transition-colors">
                      <span>Back to website</span>
                      <i className="ri-arrow-right-long-line"></i>
                    </Link>
                </div>
            </div>
            <div className="relative h-full flex items-end px-4 pb-6">
              <h1 className='text-5xl font-["Syne"] font-black leading-tight'>
                Track Stock, <br /> Stay in Control.
              </h1>
            </div>
        </div>
        <form className='h-full w-1/2 py-[5vh] px-[4vw] flex flex-col items-start justify-center gap-[5vh]'>
            <h1 className='font-["Syne"] font-black text-4xl'>Create an account</h1>
            <h4>Already have an account? <span className='text-[#10B981]'>Log in</span></h4>
            <div className='w-full flex items-center gap-6'>
                <input 
                className='w-1/2 bg-[#191919] text-md py-3 px-4 rounded-md'
                placeholder='First name'
                type="text" />
                <input 
                className='w-1/2 bg-[#191919] text-md py-3 px-4 rounded-md'
                placeholder='Last name'
                type="text" />
            </div>
            <input 
            className='w-full bg-[#191919] text-md py-3 px-4 rounded-md'
            placeholder='Email'
            type="email" />
            <input 
            className='w-full bg-[#191919] text-md py-3 px-4 rounded-md'
            placeholder='Enter your password'
            type="password" />
            <Button
            bgColor='bg-[#0BAA77]'
            color='text-white'
            style='py-4 rounded-lg font-semibold w-[40.5vw]'>
              Create Account
            </Button>
        </form>
    </div>
  )
}

export default Login
