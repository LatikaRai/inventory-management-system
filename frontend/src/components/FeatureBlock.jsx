
const FeatureBlock = ({icon,color,borderColor,featureName,para}) => {
  return (
    <div className="w-100 h-60 p-6 text-left flex flex-col gap-4 bg-gray-500/20 border border-gray-400/20 rounded-3xl">
      <div style={{ boxShadow: `0 0 15px rgba(${color},0.6)` }} className={`py-2 px-3 rounded-xl w-fit text-lg text-center border ${borderColor}`}>{icon}</div>
      <h1 className="font-semibold text-xl">{featureName}</h1>
      <p className="text-gray-300 leading-7">{para}</p>
    </div>
  )
}

export default FeatureBlock
