import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuspenseOutlet from "./components/SuspenseOutlet";
import PersistLayout from "./layouts/PersistLayout";
import { page_routes } from "./lib/page_routes";
import { ToastContainer } from "react-toastify";

const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const DashboardLayout = lazy(() => import("./layouts/DashboardLayout"));
const GuestLayout = lazy(() => import("./layouts/GuestLayout"));
const ProtectedLayout = lazy(() => import("./layouts/ProtectedLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Login = lazy(() => import("./pages/Login"));


function App() {

  return (
    <>
      <BrowserRouter basename={page_routes.home}>
        <Routes>
          <Route element={<PersistLayout />}>
            <Route element={<ProtectedLayout />}>
              <Route element={<DashboardLayout />}>
                <Route path={page_routes.dashboard} element={<p>Dashboard</p>} />
              </Route>
            </Route>
            <Route element={<GuestLayout />}>
              <Route element={<AuthLayout />}>
                <Route path={page_routes.login} element={<Login />} />
                <Route path={page_routes.register} element={<Register />} />
                <Route path={page_routes.forgotPassword} element={<ForgotPassword />} />
                <Route path={page_routes.resetPassword} element={<ResetPassword />} />
              </Route>
            </Route>
          </Route>
          <Route element={<SuspenseOutlet />}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
