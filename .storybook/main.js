// const path = require('path');
module.exports = {
  stories: ['../src/**/**/*.stories.(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  // webpack: async config => {
  //     config.module.rules.push(
  //        {
  //          test: /\.scss$/,
  //          use: ['style-loader', 'css-loader', 'sass-loader'],
  //          include: path.resolve(__dirname, '../'),
  //        },
  //        {
  //         test: /\.gif$/,
  //         use: ['file-loader'],
  //         include: path.resolve(__dirname, '../'),
  //       },
  //      );
  //     return config;
  // }
};
