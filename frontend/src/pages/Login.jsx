import React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
    <div className='h-screen w-full p-4 bg-black text-white flex items-center'>
        <div className='h-full w-1/2 bg-[#053c2a] rounded-lg flex flex-col'>
            <div>
                <h1 className="text-white font-['Syne'] font-black text-xl p-4">InvenX</h1>
                <div className='text-[#10B981]'>
                    <h2>Back to website</h2>
                    <i class="ri-arrow-right-long-line"></i>
                </div>
            </div>
            <h1 className='h-full text-5xl font-["Syne"] font-black flex items-end px-4 pb-6'>Track Stock, <br /> Stay in Control.</h1>
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
            children='Create Account'
            bgColor='bg-[#0BAA77]'
            color='text-white'
            style='py-4 rounded-lg font-semibold w-[40.5vw]'/>
        </form>
    </div>
  )
}

export default Login
