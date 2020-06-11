const commonConfig = require('./common.config');

const config = async (_, argv) => await commonConfig(_, argv);

module.exports = config;
