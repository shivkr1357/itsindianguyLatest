const imageLinksInterview = [
  {
    src: "/interview/javascript.png",
    label: "JavaScript",
    link: `/interview-qa/javascript`,
  },
  {
    src: "/interview/typescript.png",
    label: "TypeScript",
    link: `/interview-qa/typescript`,
  },
  {
    src: "/interview/react.png",
    label: "React",
    link: `/interview-qa/react`,
  },
  {
    src: "/interview/next.png",
    label: "Next.js",
    link: `/interview-qa/next`,
  },
  {
    src: "/interview/node.png",
    label: "Node.js",
    link: `/interview-qa/node`,
  },
  {
    src: "/interview/nest.png",
    label: "NestJS",
    link: `/interview-qa/nest`,
  },
  {
    src: "/interview/python.png",
    label: "Python",
    link: `/interview-qa/python`,
  },
  {
    src: "/interview/cpp.png",
    label: "CPP",
    link: `/interview-qa/cpp`,
  },
];

module.exports = {
  siteUrl: "https://itsindianguy.in",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/protected-page", "/awesome/secret-page"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => {
    const paths = [
      // Main pages with high priority
      { loc: "/", changefreq: "daily", priority: 1.0 },
      { loc: "/about", changefreq: "weekly", priority: 0.9 },
      { loc: "/contact-us", changefreq: "weekly", priority: 0.8 },
      { loc: "/blog", changefreq: "daily", priority: 0.9 },
      { loc: "/tutorials", changefreq: "daily", priority: 0.9 },
      { loc: "/resources", changefreq: "weekly", priority: 0.8 },
      { loc: "/search", changefreq: "weekly", priority: 0.7 },
      { loc: "/faq", changefreq: "weekly", priority: 0.8 },
      { loc: "/support", changefreq: "weekly", priority: 0.8 },
      { loc: "/documentation", changefreq: "weekly", priority: 0.8 },
      { loc: "/memes", changefreq: "weekly", priority: 0.7 },

      // Auth pages
      { loc: "/login", changefreq: "monthly", priority: 0.6 },
      { loc: "/signup", changefreq: "monthly", priority: 0.6 },
      { loc: "/forgot-password", changefreq: "monthly", priority: 0.5 },

      // Legal pages
      { loc: "/privacy-policy", changefreq: "monthly", priority: 0.5 },
      { loc: "/terms", changefreq: "monthly", priority: 0.5 },

      // Interview pages
      ...imageLinksInterview.map((item) => ({
        loc: item.link,
        changefreq: config.changefreq,
        priority: 0.7,
      })),

      // Development category pages
      { loc: "/web-development", changefreq: config.changefreq, priority: 0.8 },
      {
        loc: "/mobile-development",
        changefreq: config.changefreq,
        priority: 0.8,
      },
      {
        loc: "/backend-development",
        changefreq: config.changefreq,
        priority: 0.8,
      },
      { loc: "/devops", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/cloud", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/database", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/ui-ux", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/ai-ml", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/blockchain", changefreq: config.changefreq, priority: 0.8 },
      { loc: "/security", changefreq: config.changefreq, priority: 0.8 },
    ];
    return paths;
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/path", "/path-2"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/sub-path-1", "/path-2"],
      },
    ],
  },
};
