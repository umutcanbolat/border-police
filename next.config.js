/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const withCss = require('@zeit/next-css');
const prod = process.env.NODE_ENV === 'production';

module.exports = withCss({
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style\/css.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      });
    }
    return config;
  },
  env: {
    // Development purposes only. Destroy this token on mapbox before going to production.
    token:
      'pk.eyJ1IjoidW11dGNhbmJvbGF0IiwiYSI6ImNrNjNjOHA2ZzBsczYzdHF3NWttZmZwYXUifQ.uDyzyLLyl7EwKbcwXc6cDA',
  },
  // gh-pages endpoint here
  assetPrefix: prod ? '/border-police/' : '',
});
