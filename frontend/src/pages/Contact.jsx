import Button from "../components/Button"


const Contact = () => {
  return (
    <div className="h-screen w-full flex flex-col items-start justify-center gap-6 px-20 bg-black text-white">
      <div className="flex items-center text-[#10B981] gap-2">
        <h2><i className="ri-arrow-left-long-line"></i>Back to Home</h2>
        <h2 className="bg-[#10B981]/20 text-[0.8rem] py-1 px-3 rounded-full">CONTACT</h2>
      </div>
      <h1 className="text-6xl font-black font-['Syne']">Get in touch <br /><span className="text-[#10B981]">with our team.</span></h1>
      <p className="text-gray-400 text-lg">Have a question about InvenX? Want to collaborate or give <br /> feedback? We'd love to hear from you.</p>
      <div className="h-[60vh] w-full flex items-center justify-between">
        <form className="h-full w-[55%] py-4 px-8 bg-gray-600/20 flex flex-col items-start gap-4 rounded-4xl border border-gray-200/20">
            <h1 className="text-2xl font-['Syne']">Send us a message</h1>
            <div className="w-full flex flex-col">
                <label className="uppercase text-xs font-semibold text-gray-400">Your Name</label>
                <input className="w-full py-2 px-4 text-sm mt-2 rounded-xl border border-gray-200/20 bg-gray-600/20" type="text" placeholder="John Doe"/> 
            </div>
            <div className="w-full flex flex-col">
                <label className="uppercase text-xs font-semibold text-gray-400">Email Address</label>
                <input className="w-full py-2 px-4 text-sm mt-2 rounded-xl border border-gray-200/20 bg-gray-600/20" type="text" placeholder="email@gmail.com"/>
            </div>
            <div className="w-full flex flex-col">
                <label className="uppercase text-xs font-semibold text-gray-400">Message</label>
                <textarea  className="w-full h-30 py-2 px-4 text-sm mt-2 rounded-xl border border-gray-200/20 bg-gray-600/20" placeholder="Write your message here..."></textarea>
            </div>
            <Button
            bgColor='bg-[#0BAA77]'
            color='text-white'
            style='py-4 rounded-lg font-semibold w-[45vw]'>
          Send Message
          <i className="ri-arrow-right-long-line ml-2"></i>
        </Button>
        </form>
        <div className="h-full w-[40%] flex flex-col items-center justify-between">
            <div className="h-20 px-6 w-full flex items-center gap-4 rounded-3xl bg-gray-600/10 border border-gray-200/20">
                <i className="ri-mail-fill py-1 px-3 rounded-xl border border-green-200/20 text-lg bg-green-500/20"></i>
                <div>
                    <h2 className="text-xs text-gray-400 uppercase font-semibold">Email</h2>
                    <h2 className="text-sm">invexteam@gmail.com</h2>
                </div>
            </div>
            <div className="h-20 px-6 w-full flex items-center gap-4 rounded-3xl bg-gray-600/10 border border-gray-200/20">
                <i className="ri-time-fill py-1 px-3 rounded-xl border border-green-200/20 text-lg bg-green-500/20"></i>
                <div>
                    <h2 className="text-xs text-gray-400 uppercase font-semibold">Response Time</h2>
                    <h2 className="text-sm">Usually within 24 hours</h2>
                </div>
            </div>
            <div className="h-70 p-6 w-full flex flex-col items-start gap-4 rounded-3xl bg-[#10B981]/10 border border-gray-200/20">
                <i className="ri-double-quotes-l text-xl text-[#10B981]"></i>
                <p className="text-gray-400 italic">Built with passion, late nights, and a lot of coffee. InvenX is <br /> more than a project — it's our solution to a <br /> real problem.</p>
                <h2 className="text-[#10B981]">— The InvenX Team</h2>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
