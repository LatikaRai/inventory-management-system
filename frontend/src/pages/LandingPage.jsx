import Button from "../components/Button"


const LandingPage = () => {
  return (
    <div className='h-[90vh] w-full bg-black flex flex-col items-center justify-center gap-8'>
      <h1 className='text-center text-white font-black text-7xl font-["Syne"]'>Manage Stock<br /><span className="text-[#0BAA77]">Smarter &</span><br /><span className="text-[#0BAA77]">Faster</span></h1>
      <p className='w-1/2 text-xl text-gray-300 text-center leading-10 tracking-wide'>A smart, fast, and simple inventory management system built for teams. Track stock, manage categories, and never miss a low-stock alert again.</p>
      <div className="pt-10 w-full flex items-center justify-center gap-10">
        <Button
         bgColor='bg-[#0BAA77]'
         color='text-white'
         style='py-4 rounded-lg font-semibold w-60'>
          Get Started Free
          <i className="ri-arrow-right-long-line ml-2"></i>
        </Button>
        <Button
         bgColor='bg-gray-900/30'
         color='text-white'
         style='py-4 rounded-lg font-semibold w-60 border border-white/20 '>
          Explore Features
          <i className="ri-arrow-down-line ml-2"></i>
        </Button>
      </div>
    </div>
  )
}

export default LandingPage
