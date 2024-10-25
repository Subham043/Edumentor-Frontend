import { Id, ToastOptions, toast } from "react-toastify";

/*
  * Toast Hook Type
*/
type ToastHookType = () => {
    toastDismiss:() => void;
    toastSuccess:(msg:string)=>Id;
    toastError:(msg:string)=>Id;
    toastInfo:(msg:string)=>Id;
}

/*
  * Toast Configuration
*/
const toastConfig:ToastOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}

const toastInfoConfig:ToastOptions = {
    ...toastConfig,
    pauseOnHover: false,
}

/*
  Toast Hook Function: This hook is used to have common toast configs at one place
*/
export const useToast:ToastHookType = () => {
    const toastDismiss = () => {toast.dismiss()};
    const toastSuccess = (msg:string) => {toast.dismiss(); return toast.success(msg, toastConfig)};
    const toastError = (msg:string) => {toast.dismiss(); return toast.error(msg, toastConfig)};
    const toastInfo = (msg:string) => {toast.dismiss(); return toast.info(msg, toastInfoConfig)};
    return {
        toastDismiss,
        toastSuccess,
        toastError,
        toastInfo,
    };
}