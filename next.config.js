module.exports = {
  basePath: "/web",
  assetPrefix: "/web",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/ueber-uns/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jobs/:path*",
        destination: "/aktuelles",
        permanent: true,
      },
      {
        source: "/rohstoffe/:path*",
        destination: "/brote",
        permanent: true,
      },
    ]
  },
}
