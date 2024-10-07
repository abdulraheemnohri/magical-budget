import next from 'next';

const nextConfig = {
  // Enable production optimization
  productionBrowserSourceMaps: true,

  // Configure internationalization (i18n)
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
  },

  // Configure images
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },

  // Configure webpack
  webpack: (config) => {
    // Add a custom plugin
    // You need to import or define MyCustomPlugin
    // config.plugins.push(new MyCustomPlugin());

    return config;
  },
};

export default nextConfig;