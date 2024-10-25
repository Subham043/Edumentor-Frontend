import { UserType } from '@/lib/types'
import { create } from 'zustand'
import { useAxios } from './useAxios'
import { persist, createJSONStorage } from 'zustand/middleware'
import cookiesStorage from '@/lib/cookiesStorage'

export type Authtype = {
  token: string,
  token_type: "Bearer",
  user: UserType
}

type Auth = {
  auth: Authtype | null
  setAuth: (data: Authtype | null) => void
}

export const useAuth = create<Auth>()(persist(
    (set) => ({
      auth: null,
      setAuth: (data: Authtype | null) => set(() => {
        useAxios.getState().setAxios(data)
        return { auth: data }
      }),
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => cookiesStorage), // (optional) by default, 'localStorage' is used
    },
))