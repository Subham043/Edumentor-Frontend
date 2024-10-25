import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Calendar1Icon, HomeIcon, InboxIcon, SearchIcon, Settings2Icon } from "lucide-react"

// Menu items.
const items = [
 {
  title: "Home",
  url: "#",
  icon: HomeIcon,
 },
 {
  title: "Inbox",
  url: "#",
  icon: InboxIcon,
 },
 {
  title: "Calendar",
  url: "#",
  icon: Calendar1Icon,
 },
 {
  title: "Search",
  url: "#",
  icon: SearchIcon,
 },
 {
  title: "Settings",
  url: "#",
  icon: Settings2Icon,
 },
]

const AppSidebar = () => {
 return (
  <Sidebar>
   <SidebarHeader>
    LOGO
   </SidebarHeader>
   <SidebarContent>
    <SidebarGroup>
     <SidebarGroupLabel>Application</SidebarGroupLabel>
     <SidebarGroupContent>
      <SidebarMenu>
       {items.map((item) => (
        <SidebarMenuItem key={item.title}>
         <SidebarMenuButton asChild>
          <a href={item.url}>
           <item.icon />
           <span>{item.title}</span>
          </a>
         </SidebarMenuButton>
        </SidebarMenuItem>
       ))}
      </SidebarMenu>
     </SidebarGroupContent>
    </SidebarGroup>
   </SidebarContent>
  </Sidebar>
 )
}

export default AppSidebar