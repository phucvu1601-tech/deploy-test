import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/deploy-test",
  images: {
    unoptimized: true,
  },
}
export default nextConfig
