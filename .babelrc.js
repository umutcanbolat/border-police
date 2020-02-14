const env = require('./env-config');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        style: 'css',
      },
    ],
    [
      'styled-components',
      {
        ssr: true,
      },
    ],
    'inline-react-svg',
    ['transform-define', env],
  ],
};
