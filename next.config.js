const withBundleAnalyzer = require('@next/bundle-analyzer');

module.exports = (phase, defaultConfig) => {
	return withBundleAnalyzer(defaultConfig);
};
