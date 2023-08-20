/** @type {import('next').NextConfig} */
const nextConfig = {

    module: {
        rules: [{ test: /\.md$/, use: 'raw-loader' }],
      },
}

module.exports = nextConfig
