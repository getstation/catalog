require('ts-node/register');

const custom = require('../webpack/webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
  ],
  webpackFinal: async config => {
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );
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
    config.module.rules.push({
      test: /\.tsx?$/,
      loaders: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.css$/,
      loaders: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV !== 'production',
          },
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'styles.css',
    }));

    config.resolve.alias = {
      ...config.resolve.alias,
      ...extensionConf.resolve.alias,
    };
    config.resolve.extensions.push('.ts', '.tsx', '.jsx');

    return config;
  },
};
