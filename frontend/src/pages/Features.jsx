import FeatureBlock from "../components/FeatureBlock"

const Featues = () => {
  return (
    <div className="h-screen w-full bg-black text-white text-center flex flex-col items-center justify-center gap-5">
      <h1 className="font-['Syne'] text-5xl font-black">Everything you need <br />to manage stock</h1>
      <h3 className="text-gray-200/60 p-4 text-lg font-semibold">Built with simplicity in mind. Powerful enough for real teams.</h3>
      <div className="w-full h-fit flex items-center justify-between px-35">
        <FeatureBlock 
      icon={<i className='ri-archive-2-fill'></i>}
      color="34,197,94"
      borderColor="border-green-400/30"
      featureName="Real-time Inventory"
      para="Track every item live. Know exactly what's in stock, what's running low, and what needs reordering."
      />
        <FeatureBlock 
      icon={<i className="ri-notification-2-fill"></i>}
      color="245,158,11"
      borderColor="border-amber-400/30"
      featureName="Low Stock Alerts"
      para="Never run out again. Get automatic alerts when items fall below your set threshold."
      />
      <FeatureBlock 
      icon={<i className="ri-dashboard-horizontal-fill"></i>}
      color="99, 102, 241"
      borderColor="border-indigo-400/30"
      featureName="Smart Dashboard"
      para="All your inventory data in one place. Visual reports, trends, and insights at a glance."
      />
      </div>
      <div className="w-full h-fit flex items-center justify-between px-35">
        <FeatureBlock 
      icon={<i className="ri-menu-search-line"></i>}
      color="34,197,94"
      borderColor="border-green-400/30"
      featureName="Category Management"
      para="Organize items into categories for faster search, filtering, and better stock visibility."
      />
        <FeatureBlock 
      icon={<i className="ri-lock-2-fill"></i>}
      color="245,158,11"
      borderColor="border-amber-400/30"
      featureName="Role-based Access"
      para="Control who sees what. Admins manage everything; staff can only update assigned areas."
      />
      <FeatureBlock 
      icon={<i className="ri-folder-3-fill"></i>}
      color="99, 102, 241"
      borderColor="border-green-400/30"
      featureName="Export & Reports"
      para="Download inventory reports anytime. Keep records clean for audits and presentations."
      />
      </div>
    </div>
  )
}

export default Featues
