const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { name, dependencies: deps } = require('./package.json');

const addPluginsAndRules = config => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      exposes: { './RemoteMessenger': './src/App.tsx' },
      filename: 'remoteEntry.js',
      name,
      remotes: {},
      shared: {
  			react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
			},
    })
  );

  return config;
};

module.exports = [
  (config) => {
    const mode = process.env.NODE_ENV || 'development';
    let publicPath = `//${process.env.HOST}:${process.env.PORT}/`;
    config.output.publicPath = publicPath;
    config.mode = mode;

    if (mode === 'development') {
      config.devServer = {
        ...config.devServer,
        // hot: true,
        // liveReload: true,
      };
    }

    return addPluginsAndRules(config);
  }
];
