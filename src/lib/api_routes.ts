export const api_routes = {
 auth:{
  login: "/auth/login",
  register: "/auth/register",
  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password",
 },
 account: {
  profile: "/account",
 }
} as const