const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/Humavitha.github.io' : '',
  basePath: isProd ? '/Humavitha.github.io' : '',
  trailingSlash: true, // Ensure URLs end with a slash
  output: 'export', // Required for static export
}

module.exports = nextConfig;

