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
