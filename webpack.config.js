const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    entry: './src/index',
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
        openAnalyzer: true,
        analyzerMode: 'static',
        generateStatsFile: false,
        }),
    ]
}