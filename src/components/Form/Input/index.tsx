import { cn } from "@/lib/utils"
import { forwardRef } from "react"


type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
   <input ref={ref} {...props} className={cn("mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300", className)} />
  )
})

export default Input