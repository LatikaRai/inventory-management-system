import Button from "../components/Button"

const Nav = () => {
  return (
    <div className='h-[10vh] w-full bg-black backdrop-blur-xl flex items-center justify-between px-8'>
        <div className="w-1/2">
            <h1 className="text-white font-['Syne'] font-black text-xl">InvenX</h1>
        </div>
        <div className="w-1/2 text-white font-semibold flex items-center justify-center gap-20">
            <h2>Features</h2>
            <h2>About</h2>
            <h2>Contact</h2>
            <h2>Login</h2>
            <Button
            bgColor='bg-[#0BAA77]'
            color='text-white'
            style='p-2 rounded-full font-semibold w-44'>
            Get Started Free
            <i className="ri-arrow-right-long-line ml-2"></i>
            </Button>
        </div>
    </div>
  )
}

export default Nav
