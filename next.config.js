/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
  experimental: {
    turbo: {
      rules: {
        // Option format
        '*.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              format: 'md',
            },
          },
        ],
        // Option-less format
        '*.mdx': ['@mdx-js/loader'],
      },
    },
  },
};

module.exports = nextConfig;
