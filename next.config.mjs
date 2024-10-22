/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['api.producthunt.com'], 
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", 
    },
  };
  
  export default nextConfig;