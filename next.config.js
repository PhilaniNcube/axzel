const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
