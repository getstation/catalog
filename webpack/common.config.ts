/* eslint-disable functional/immutable-data */
import * as Webpack from 'webpack';
import * as path from 'path';

const rootFolder = path.resolve(__dirname, '..');
const srcFolder = path.join(rootFolder, 'src');

// common configuration
const config: Webpack.ConfigurationFactory = (_, argv) => {
  // Default config for PROD
  const conf: Webpack.Configuration = {
    devtool: 'source-map',
    resolve: {
      // ⚠️ .mjs to add BEFORE all the others, because: https://github.com/graphql/graphql-js/issues/1272
      extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@src': srcFolder,
        '@packageJson': path.join(rootFolder, 'package.json'),
        '@components': path.join(srcFolder, 'components'),
      },
    },
    module: {
      rules: [
        { test: /\.tsx?$/, loader: 'ts-loader' },
        {
          test: /\.(svg|png)$/,
          use: [
            {
              loader: 'url-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new Webpack.EnvironmentPlugin(['NODE_ENV']), // access to process.env.NODE_ENV from everywhere
    ],
  };

  // Overridden config for DEV
  if (argv.mode === 'development') {
    conf.watch = true;
    conf.devtool = 'inline-source-map';
  }

  return conf;
};

export default config;
