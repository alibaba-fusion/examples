const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

function replaceSelector(transform) {
  return function (css) {
    css.walkRules((rule) => {
      const newSelectors = rule.selectors.map((selector, ...arg) => {
        const res = transform(selector, ...arg);
        if (res) return res;
        return selector;
      });
      rule.selectors = newSelectors;
    });
  };
};

function setTheme(type) {
  return replaceSelector((selector) => {
    if (selector.startsWith(':root')) {
      return selector.replace(/\:root/g, `html.${type}`);
    }
  });
};

const themeLoader = [
  {
    test: /theme-dark\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [setTheme('dark')],
        },
      },
      'fast-sass-loader'
    ],
  },
  {
    test: /theme-light\.css$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: [setTheme('light')],
        },
      },
      'fast-sass-loader'
    ],
  },
];

module.exports = {
  mode: 'production',
  // mode: "development",
  optimization: {
    usedExports: true,
    minimize: false,
    concatenateModules: false,
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        //exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript', '@babel/env', '@babel/react'],
            plugins: [
                [
                  "import",
                  {
                    libraryName: '@alifd/next',
                    libraryDirectory: 'lib',
                    // style: true
                    style: (name) => {
                        console.log(name,'=====')
                        return `${name}/style2`;
                      }
                  },
                ],
            ],
          },
        },
      },
      ...themeLoader,
      {
        test: /\.(s?)css$/,
        exclude: /(theme-dark|theme-light)/,
        use: ['style-loader', 'css-loader', 'fast-sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
