import axiosInstance from '@/lib/axios'
import { AxiosInstance } from 'axios'
import { create } from 'zustand'
import { Authtype, useAuth } from './useAuth'

type Auth = {
 axios: AxiosInstance
 setAxios: (data: Authtype | null) => void
}

export const useAxios = create<Auth>()((set) => {
 return {
  axios: axiosInstance,
  setAxios: (data: Authtype | null) => set((state) => {
   const axios = state.axios
   axios.interceptors.request.use(
    config => {
     if (!config.headers['authorization'] && data) {
      config.headers['authorization'] = `Bearer ${data.token}`;
     }else{
      config.headers['authorization'] = undefined;
     }
     return config;
    },
    (error) => Promise.reject(error)
   )
   axios.interceptors.response.use(
    response => response,
    async (error) => {
     if (error?.response?.status === 401) {
      useAuth.getState().setAuth(null);
     }
     return Promise.reject(error);
    }
   );
   return { axios }
  }),
 }
})