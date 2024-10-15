const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const {name, dependencies: deps} = require('./package.json');

const addPlugins = config => {
	config.plugins.unshift(
  	new ModuleFederationPlugin({
      exposes: {'./RemoteMessenger': './src/components/Messenger.tsx',},
      filename: 'remoteEntry.js',
      name,
      remotes: {},
			shared: {
				...deps,
        react: { singleton: true, eager: true, requiredVersion: false },
        'react-dom': { singleton: true, eager: true, requiredVersion: false },
      },
    }),
	)
	return config
}

module.exports = [
	(config) => {
		const mode = process.env.NODE_ENV || 'developer'
		let publicPath = ''
		publicPath = `//${process.env.HOST}:${process.env.PORT}/`
		config.output.publicPath = publicPath
		config.mode = mode

		return addPlugins(config)
	}
]