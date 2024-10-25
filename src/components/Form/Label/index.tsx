import { cn } from "@/lib/utils"
import { forwardRef } from "react"


type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

const Label = forwardRef<HTMLLabelElement, LabelProps>(({ className, children, ...props }, ref) => {
  return (
    <label ref={ref} {...props} className={cn("block text-sm font-medium text-gray-700", className)}>{children}</label>
  )
})

export default Label