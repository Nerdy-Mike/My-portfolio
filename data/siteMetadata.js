const siteMetadata = {
  title: 'Michaele Le`s Portfolio',
  author: 'Michael Le',
  headerTitle: 'Michael Le',
  description: 'A Portfolio created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'mike.thenerdy@gmail.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
};

module.exports = siteMetadata;
