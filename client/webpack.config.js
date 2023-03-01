const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const createStyledComponentsTransformer =
  require('typescript-plugin-styled-components').default;

const isProduction = process.env.NODE_ENV === 'production';

const contextPath = path.resolve(__dirname, './');
const sourcePath = path.resolve(__dirname, 'src');
const outputPath = path.resolve(__dirname, 'build');

const styledComponentsTransformer = createStyledComponentsTransformer();

const babelOptions = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        development: !isProduction,
        runtime: 'automatic',
        targets: { node: 'current' },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-transform-runtime',
  ],
};

const htmlOptions = {
  meta: {
    'Content-Security-Policy': {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    },
    viewport: 'width=device-width, initial-scale=1',
  },
  title: 'Metaverse',
};

const terserOptions = {
  terserOptions: {
    compress: true,
    format: {
      comments: false,
    },
  },
  extractComments: false,
};

const baseConfig = {
  context: contextPath,
  entry: {
    index: './src/app/index.tsx',
  },
  output: {
    path: outputPath,
    clean: true,
  },
  resolve: {
    alias: {
      '@app': `${sourcePath}/app`,
      '@processes': `${sourcePath}/processes`,
      '@pages': `${sourcePath}/pages`,
      '@widgets': `${sourcePath}/widgets`,
      '@features': `${sourcePath}/features`,
      '@entities': `${sourcePath}/entities`,
      '@shared': `${sourcePath}/shared`,
    },
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  plugins: [new HtmlWebpackPlugin(htmlOptions)],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        include: sourcePath,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions,
          },
          {
            loader: 'ts-loader',
            options: {
              getCustomTransformers: () => ({
                before: [styledComponentsTransformer],
              }),
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
};

const prodConfig = {
  ...baseConfig,
  target: 'browserslist',
  mode: 'production',
  output: {
    ...baseConfig.output,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(terserOptions)],
  },
};

const devConfig = {
  ...baseConfig,
  target: 'web',
  mode: 'development',
  output: {
    ...baseConfig.output,
    filename: '[name][hash].js',
    assetModuleFilename: 'assets/[name][hash][ext][query]',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    static: './build',
    host: 'localhost',
    hot: true,
    open: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
  },
};

module.exports = isProduction ? prodConfig : devConfig;
