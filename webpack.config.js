const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const NODE_ENV = process.env.NODE_ENV;

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    /**
     * [SplitChunksPlugin]
     * 
     * Dynamic filename is needed to name splitted chunks
     */
    filename: '[name].bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin({ openAnalyzer: false })
  ],
  /**
   * [SplitChunksPlugin]
   * 
   * This spits out lodash from main chunk to a separate chunk
   */
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
};

module.exports = config;