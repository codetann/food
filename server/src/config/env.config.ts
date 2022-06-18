const port: number = Number(process.env.PORT) || 3000;
const env: string = process.env.NODE_ENV || "development";

export const config = {
  port,
  env,
};
