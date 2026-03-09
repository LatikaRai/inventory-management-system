import React from 'react'

const StatsBar = () => {
  return (
    <div className='w-full h-[15vh] px-10 bg-black text-white  flex items-center justify-center'>
      <div className='w-[90%] h-full rounded-2xl border border-gray-300/20 bg-gray-300/10 flex items-center justify-between'>
        <div className='w-1/4 text-center'>
            <h1 className='font-["Syne"] font-black text-3xl'>10K+</h1>
            <h2 className='text-gray-400'>Items Tracked</h2>
        </div>
        <div className='w-1/4 text-center'>
            <h1 className='font-["Syne"] font-black text-3xl'>99.9%</h1>
            <h2 className='text-gray-400'>Uptime</h2>
        </div>
        <div className='w-1/4 text-center'>
            <h1 className='font-["Syne"] font-black text-3xl'>3x</h1>
            <h2 className='text-gray-400'>Faster Restocking</h2>
        </div>
        <div className='w-1/4 text-center'>
            <h1 className='font-["Syne"] font-black text-3xl'>Zero</h1>
            <h2 className='text-gray-400'>Stockouts</h2>
        </div>
      </div>
    </div>
  )
}

export default StatsBar

