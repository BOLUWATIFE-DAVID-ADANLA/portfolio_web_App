import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const withMDX = createMDX({})

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/**',
      },
    ],
  },
}

export default withMDX(nextConfig)

initOpenNextCloudflareForDev()