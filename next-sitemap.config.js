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
    const paths = imageLinksInterview.map((item) => ({
      loc: item.link,
      changefreq: config.changefreq,
      priority: config.priority,
    }));
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
