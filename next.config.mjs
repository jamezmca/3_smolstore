/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        outputFileTracing: true, // Improves serverless handling
    },
};

export default nextConfig;
