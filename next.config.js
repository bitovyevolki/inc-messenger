const { container } = require('webpack')
const ModuleFederationPlugin = container.ModuleFederationPlugin
const { dependencies: deps, name } = require('./package.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['staging-it-incubator.s3.eu-central-1.amazonaws.com'],
  },
  webpack: (config, { isServer }) => {
    config.plugins.push(
      new ModuleFederationPlugin({
        exposes: {'./TestComponents': './src/components/TestComponent.tsx',},
        filename: 'static/chunks/remoteEntry.js',
        name,
        remotes: {},
				shared: {
					...deps,
          react: { singleton: true, eager: true, requiredVersion: false },
          'react-dom': { singleton: true, eager: true, requiredVersion: false },
        },
      })
    )

    return config
  },
}

module.exports = nextConfig