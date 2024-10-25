import SuspenseOutlet from "@/components/SuspenseOutlet";
import { page_routes } from "@/lib/page_routes";
import { useAuth } from "@/store/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const ProtectedLayout = () => {
  const location = useLocation();
  const {auth} = useAuth();

  return auth ? <SuspenseOutlet /> : 
  <Navigate to={page_routes.login} state={{from: location}} replace />;
}

export default ProtectedLayout