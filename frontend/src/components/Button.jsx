
const Button = ({children,bgColor,color,style}) => {
  return (
    <div>
      <button className={`text-md felx items-center ${bgColor} ${color} ${style}`}>{children}</button>
    </div>
  )
}

export default Button
