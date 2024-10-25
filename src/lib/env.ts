const base = {
  API_ENDPOINT: "http://localhost:8000/api/v1",
} as const;

const env_production = {
  ...base,
  API_ENDPOINT: "https://users.api.maximumaccountability.net/api/v1",
} as const;

export const ENV = import.meta.env.MODE === "production" ? env_production : base;