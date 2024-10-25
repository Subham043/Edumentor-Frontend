import { StateStorage } from "zustand/middleware";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

const cookiesStorage: StateStorage = {
  getItem: (name: string) => {
    const data = getCookie(name);
    if (!data) return null;
    // decode
    return atob(data) ?? null;
  },
  setItem: (name: string, value: string) => {
    const data = btoa(value);
    setCookie(name, data, { expires: 1 });
  },
  removeItem: (name: string) => {
    removeCookie(name);
  },
};

export default cookiesStorage;
