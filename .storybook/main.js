require('ts-node/register');

const custom = require('../webpack/webpack.config').default;

module.exports = {
  stories: ['../src/stories/*.tsx'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    'storybook-addon-jss-theme/dist/register'
  ],
  webpackFinal: async config => {
    const extensionConf = await custom('', config.mode);
    config.module.rules.push({
      test: /stories\/.*\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    });
    config.module.rules.push({ test: /\.tsx?$/, loader: 'ts-loader' });

    config.resolve.alias = {
      ...config.resolve.alias,
      ...extensionConf.resolve.alias,
    };
    config.resolve.extensions.push('.ts', '.tsx', '.jsx');

    return config;
  },
};
