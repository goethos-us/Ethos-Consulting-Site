/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  /**
   * On Windows, Turbopack can race on `_buildManifest.js.tmp.*` / manifest ENOENT under `.next`.
   * Default `npm run dev` uses Webpack; disabling dev cache avoids stale pack-file errors there too.
   * Use `npm run dev:turbo` if you prefer Turbopack after a clean `.next`.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
