/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/sofwave",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/xerf",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/aerolase-neo-elite",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/thread-lift",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/facial",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/emsculpt-neo",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/other-services",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/booking-page",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
