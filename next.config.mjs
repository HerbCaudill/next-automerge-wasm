/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: function (config, options) {
    config.experiments = { asyncWebAssembly: true, layers: true }
    return config
  },
}

export default nextConfig
