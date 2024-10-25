import { cn } from "@/lib/utils"
import { forwardRef } from "react"


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const FormButton = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, ...props }, ref) => {
  return (
   <button ref={ref} {...props} className={cn("w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300", className)}>{children}</button>
  )
})

export default FormButton