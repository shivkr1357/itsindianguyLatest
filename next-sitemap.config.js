/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.itsindianguy.in",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    "/api/*",
    "/admin/*",
    "/private/*",
    "/_next/*",
    "/404",
    "/500",
    "/login",
    "/signup",
    "/forgot-password",
  ],
  additionalPaths: async (config) => {
    const result = [];

    // Blog posts
    const blogSlugs = [
      'getting-started-with-nextjs-14',
      'typescript-best-practices',
      'react-server-components',
      'nodejs-performance-tips',
      'graphql-vs-rest',
      'modern-css-techniques',
      'docker-kubernetes',
      'nextjs-14',
      'web-security',
      'mongodb-mastery',
      'microservices-architecture',
      'react-hooks-guide',
      'aws-deployment',
      'testing-best-practices',
      'nextjs-15-features',
    ];

    blogSlugs.forEach((slug) => {
      result.push({
        loc: `/blog/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Tutorial pages
    const tutorialSlugs = [
      'fullstack-nextjs',
      'typescript-generics',
      'react-performance',
      'nodejs-api',
      'docker-developers',
      'ml-basics',
      'graphql-api',
      'aws-deployment',
    ];

    tutorialSlugs.forEach((slug) => {
      result.push({
        loc: `/tutorials/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Interview Q&A pages
    const interviewSlugs = [
      'javascript',
      'react',
      'node',
      'cpp',
      'python',
      'dsa-interview',
      'database-interview',
      'ml-interview',
      'typescript',
      'next',
      'nest'
    ];

    interviewSlugs.forEach((slug) => {
      result.push({
        loc: `/interview-qa/${slug}`,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Newsletter page
    result.push({
      loc: '/newsletter',
      changefreq: 'monthly',
      priority: 0.6,
      lastmod: new Date().toISOString(),
    });

    return result;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/about",
          "/contact-us",
          "/blog",
          "/tutorials",
          "/interview-qa",
          "/memes",
          "/resources",
          "/documentation",
          "/support",
          "/faq",
          "/search",
          "/web-development",
          "/mobile-development",
          "/backend-development",
          "/devops",
          "/cloud",
          "/database",
          "/ui-ux",
          "/ai-ml",
          "/blockchain",
          "/security",
          "/privacy-policy",
          "/terms",
        ],
        disallow: [
          "/api/*",
          "/admin/*",
          "/private/*",
          "/_next/*",
          "/login",
          "/signup",
          "/forgot-password",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      "https://www.itsindianguy.in/sitemap.xml",
      "https://www.itsindianguy.in/blog-sitemap.xml",
      "https://www.itsindianguy.in/tutorials-sitemap.xml",
    ],
  },
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = "weekly";

    // Homepage
    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    }

    // Main category pages
    if (["/about", "/blog", "/tutorials", "/interview-qa"].includes(path)) {
      priority = 0.9;
      changefreq = "daily";
    }

    // Development category pages
    if (
      path.includes("-development") ||
      [
        "/devops",
        "/cloud",
        "/database",
        "/ui-ux",
        "/ai-ml",
        "/blockchain",
        "/security",
      ].includes(path)
    ) {
      priority = 0.8;
      changefreq = "weekly";
    }

    // Blog posts
    if (path.startsWith("/blog/")) {
      priority = 0.6;
      changefreq = "monthly";
    }

    // Interview pages
    if (path.startsWith("/interview-qa/")) {
      priority = 0.7;
      changefreq = "monthly";
    }

    // Legal and support pages
    if (["/privacy-policy", "/terms", "/support", "/faq"].includes(path)) {
      priority = 0.5;
      changefreq = "monthly";
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://www.itsindianguy.in${path}`,
          hreflang: "en",
        },
      ],
    };
  },
};
