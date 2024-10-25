import AppSidebar from "@/components/AppSidebar"
import Header from "@/components/Header"
import SuspenseOutlet from "@/components/SuspenseOutlet"
import { SidebarProvider } from "@/components/ui/sidebar"

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <SuspenseOutlet />
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout