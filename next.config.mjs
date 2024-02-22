export default {
  webpack: config => ({
    ...config,
    experiments: {
      asyncWebAssembly: true,
      layers: true,
    },
  }),
}
