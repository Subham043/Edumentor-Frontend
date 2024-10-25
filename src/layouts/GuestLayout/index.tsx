import SuspenseOutlet from "@/components/SuspenseOutlet";
import { page_routes } from "@/lib/page_routes";
import { useAuth } from "@/store/useAuth";
import { Navigate } from "react-router-dom";


const GuestLayout = () => {
  const {auth} = useAuth();

  return auth===null ? <SuspenseOutlet /> : 
  <Navigate to={page_routes.dashboard} />;
}

export default GuestLayout