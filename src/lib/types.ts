

export type UserType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  is_banned: boolean | null;
  role: string | null;
  created_at: string;
  updated_at: string;
  verified: string;
  verified_at: string | null;
};

export type AxiosErrorResponseType = {
  message: string;
  errors?: Record<string, string[]>;
};