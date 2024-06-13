/** @type {import('next').NextConfig} */
import withBundleAnalyzer from '@next/bundle-analyzer'
const nextConfig = {
    experimental: {
        nextScriptWorkers: true,
      },
};

export default withBundleAnalyzer(nextConfig);
