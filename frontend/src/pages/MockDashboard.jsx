
const MockDashboard = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-8">
      <div className="h-[80vh] w-4/5 bg-black/80 rounded-xl border border-gray-500 overflow-hidden">
        <div className="h-18 w-full px-6 flex items-center justify-items-start gap-6 border-b border-gray-500">
            <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full bg-red-500"></div>
                <div className="h-4 w-4 rounded-full bg-amber-400"></div>
                <div className="h-4 w-4 rounded-full bg-green-500"></div>
            </div>
            <h3 className="text-gray-500">localhost:5173/dashboard</h3>
        </div>
        <div className="h-full w-full flex">
            <div className="h-full w-[20%] flex flex-col items-start p-6 border-r border border-gray-500">
                <h1 className="text-green-300 font-semibold text-lg p-4 w-full rounded-lg bg-green-500/20">Dashboard</h1>
                <h1 className="text-gray-400 font-semibold text-lg p-4 w-full">Items</h1>
                <h1 className="text-gray-400 font-semibold text-lg p-4 w-full">Categories</h1>
                <h1 className="text-gray-400 font-semibold text-lg p-4 w-full">Reports</h1>
            </div>
            <div className="h-full w-[80%] p-6 flex flex-col gap-6">
                <div className="h-[20%] w-full flex items-center justify-between">
                    <div className="w-[30%] h-full rounded-2xl p-6 bg-green-400/20 border border-gray-500">
                        <h1 className="text-3xl font-['Syne'] font-semibold text-green-500">248</h1>
                        <h1 className="text-gray-300">Total Items</h1>
                    </div>
                    <div className="w-[30%] h-full rounded-2xl p-6 bg-amber-400/20 border border-gray-500">
                        <h1 className="text-3xl font-['Syne'] font-semibold text-amber-500">12</h1>
                        <h1 className="text-gray-300">Low Stock</h1>
                    </div>
                    <div className="w-[30%] h-full rounded-2xl p-6 bg-indigo-400/20 border border-gray-500">
                        <h1 className="text-3xl font-['Syne'] font-semibold text-indigo-500">8</h1>
                        <h1 className="text-gray-300">Categories</h1>
                    </div>
                </div>
                <div className="h-[62%] w-full bg-green-400/20 text-white/60 rounded-2xl border border-gray-500">
                    <div className="flex items-center font-semibold justify-between bg-green-200/20 text-center uppercase border-b border-gray-300/40 px-8 py-5">
                        <h1 className="w-1/4">item</h1>
                        <h1 className="w-1/4">category</h1>
                        <h1 className="w-1/4">qty</h1>
                        <h1 className="w-1/4">status</h1>
                    </div>
                    <div className="w-full flex items-center justify-between text-center text-[0.95rem] border-b border-gray-300/40 px-8 py-5">
                        <h1 className="w-1/4">Laptop Stand</h1>
                        <h1 className="w-1/4">Electronics</h1>
                        <h1 className="w-1/4">34</h1>
                        <span className="w-1/4 bg-green-400/20 text-green-400 py-1 border border-green-300/40 rounded-full">In Stock</span>
                    </div>
                    <div className="w-full flex items-center justify-between text-center text-[0.95rem] border-b border-gray-300/40 px-8 py-5">
                        <h1 className="w-1/4">Whiteboard Marker</h1>
                        <h1 className="w-1/4">Stationary</h1>
                        <h1 className="w-1/4">4</h1>
                        <span className="w-1/4 bg-amber-400/20 text-amber-400 py-1 border border-amber-300/40 rounded-full">Low Stock</span>
                    </div>
                    <div className="w-full flex items-center justify-between text-center text-[0.95rem] border-b border-gray-300/40 px-8 py-5">
                        <h1 className="w-1/4">USB Hub</h1>
                        <h1 className="w-1/4">Electronics</h1>
                        <h1 className="w-1/4">18</h1>
                        <span className="w-1/4 bg-green-400/20 text-green-400 py-1 border border-green-300/40 rounded-full">In Stock</span>
                    </div>
                    <div className="w-full flex items-center justify-between text-center text-[0.95rem] px-8 py-5">
                        <h1 className="w-1/4">Sticky Notes</h1>
                        <h1 className="w-1/4">Stationary</h1>
                        <h1 className="w-1/4">120</h1>
                        <span className="w-1/4 bg-green-400/20 text-green-400 py-1 border border-green-300/40 rounded-full">In Stock</span>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MockDashboard
