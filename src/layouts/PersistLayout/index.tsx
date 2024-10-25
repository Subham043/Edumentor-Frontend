import PageLoader from "@/components/PageLoader";
import SuspenseOutlet from "@/components/SuspenseOutlet";
import { api_routes } from "@/lib/api_routes";
import axiosInstance from "@/lib/axios";
import { UserType } from "@/lib/types";
import { useAuth } from "@/store/useAuth";
import { useAxios } from "@/store/useAxios";
import { useEffect, useState } from "react";


const PersistLayout = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const { setAuth, auth } = useAuth();
  const { setAxios } = useAxios();

  useEffect(() => {
    let isMounted = true;
    const checkUserAuthenticated = async () => {
      try {
        await axiosInstance.get<{ profile: UserType }>(api_routes.account.profile, {
          headers: {
            authorization: `Bearer ${auth?.token}`
          }
        });
        setAxios(auth);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setAuth(null);
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (isMounted && auth) {
      checkUserAuthenticated()
    } else {
      setLoading(false)
    }

    return () => { isMounted = false; checkUserAuthenticated() };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {
        loading ? <PageLoader /> : <SuspenseOutlet />
      }
    </>
  )
}

export default PersistLayout