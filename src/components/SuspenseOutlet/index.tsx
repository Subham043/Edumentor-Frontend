import { Suspense } from "react"
import PageLoader from "../PageLoader"
import { Outlet } from "react-router-dom"


const SuspenseOutlet = () => {
  return (
    <Suspense fallback={<PageLoader />}>
        <Outlet />
    </Suspense>
  )
}

export default SuspenseOutlet