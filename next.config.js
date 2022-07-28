/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },
};
