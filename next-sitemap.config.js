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
    // Exclude duplicate nested paths
    "/blog/*/blog/*",
    "/projects/*/projects/*",
    "/tutorials/*/tutorials/*",
    "/security/security",
  ],
  additionalPaths: async (config) => {
    const result = [];

    // Blog posts
    const blogSlugs = [
      "hindi-story-first",
      "react-19-features-complete-guide-2025",
      "building-ai-powered-web-applications-2025",
      "ai-assisted-development-2025",
      "chatgpt-helping-developers-real-experiences",
      "hot-tech-trends-2025",
      "ai-technology-everyday-life",
      "ai-agents-autonomous-systems-2025",
      "getting-started-with-nextjs-14",
      "mastering-typescript-generics",
      "react-performance-optimization-tips",
      "building-rest-apis-with-nodejs",
      "introduction-to-machine-learning",
      "docker-for-beginners",
      "graphql-vs-rest",
      "nodejs-performance",
      "modern-css",
      "typescript-practices",
      "server-components",
      "nextjs-14",
      "web-security",
      "mongodb-mastery",
      "nextjs-15-features",
      "react-native-expert-guide",
    ];

    blogSlugs.forEach((slug) => {
      result.push({
        loc: `/blog/${slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Tutorial pages
    const tutorialSlugs = [
      "fullstack-nextjs",
      "typescript-generics",
      "react-performance",
      "nodejs-api",
      "docker-developers",
      "ml-basics",
      "graphql-api",
      "aws-deployment",
    ];

    tutorialSlugs.forEach((slug) => {
      result.push({
        loc: `/tutorials/${slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Interview Q&A pages
    const interviewSlugs = [
      "javascript",
      "react",
      "node",
      "cpp",
      "python",
      "dsa-interview",
      "database-interview",
      "ml-interview",
      "typescript",
      "next",
      "nest",
    ];

    interviewSlugs.forEach((slug) => {
      result.push({
        loc: `/interview-qa/${slug}`,
        changefreq: "monthly",
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Newsletter page
    result.push({
      loc: "/newsletter",
      changefreq: "monthly",
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
          "/blog/hindi-stories",
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
    // Exclude duplicate nested paths
    if (
      path.match(/\/blog\/[^/]+\/blog\//) ||
      path.match(/\/projects\/[^/]+\/projects\//) ||
      path.match(/\/tutorials\/[^/]+\/tutorials\//) ||
      path === "/security/security"
    ) {
      return null; // Exclude from sitemap
    }

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
    };
  },
};
