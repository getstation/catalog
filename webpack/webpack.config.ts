import * as Webpack from 'webpack';
import commonConfig from './common.config';

const config: Webpack.ConfigurationFactory = async (_: any, argv: any) => await commonConfig(_, argv);

export default config;
