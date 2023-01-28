const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'production',
  entry: `${__dirname}/script.mjs`,
  resolve: {
    extensions: ['.mjs'],
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "path": require.resolve("path-browserify"),
      "buffer": require.resolve("buffer"),
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "./node_modules/sql.js/dist/sql-wasm.wasm",
          to: `${__dirname}/assets/sql-wasm.wasm`
        },
      ],
      options: {
        concurrency: 100,
      },
    }),
  ],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'bundle.js',
  },
};