import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "./SocialIcon";

export const metadata: Metadata = {
  title: "Hire Me - Full-Stack Developer | ItsIndianGuy | Upwork & LinkedIn",
  description:
    "Hire ItsIndianGuy for your next project. Expert full-stack developer specializing in Next.js, React, Node.js, TypeScript. View portfolio, Upwork profile, LinkedIn, and get in touch.",
  keywords:
    "hire ItsIndianGuy, full-stack developer for hire, Next.js developer, React developer India, Upwork freelancer, LinkedIn profile ItsIndianGuy, web developer portfolio, hire developer India, ItsIndianGuy services",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/hire-me",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Hire Me - Full-Stack Developer | ItsIndianGuy",
    description:
      "Expert full-stack developer available for hire. Specializing in Next.js, React, Node.js. View portfolio and connect via Upwork or LinkedIn.",
    url: "https://www.itsindianguy.in/hire-me",
    siteName: "ItsIndianGuy - Programming Tutorials",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.itsindianguy.in/og-hire-me.jpg",
        width: 1200,
        height: 630,
        alt: "Hire ItsIndianGuy - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Me - Full-Stack Developer | ItsIndianGuy",
    description:
      "Expert full-stack developer available for hire. View portfolio and connect via Upwork or LinkedIn.",
    creator: "@itsindianguy",
    images: ["https://www.itsindianguy.in/og-hire-me.jpg"],
  },
};

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js and Stripe integration. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    link: "/projects/ecommerce",
    featured: true,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application using WebSocket technology. Supports multiple rooms, file sharing, and message history with React and Node.js.",
    image: "https://cdn-icons-png.flaticon.com/512/2665/2665393.png",
    tech: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    link: "/projects/chat",
    featured: true,
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management system with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://cdn-icons-png.flaticon.com/512/2620/2620576.png",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
    link: "/projects/task-manager",
    featured: true,
  },
  {
    title: "AI Image Generator",
    description:
      "Generate unique images using AI and machine learning. Integrated with OpenAI API for creative image generation with custom prompts.",
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png",
    tech: ["Python", "TensorFlow", "OpenAI API", "React", "FastAPI"],
    link: "/projects/ai-image",
    featured: false,
  },
  {
    title: "Crypto Dashboard",
    description:
      "Real-time cryptocurrency tracking and analytics dashboard with price charts, portfolio tracking, and market analysis.",
    image: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png",
    tech: ["React", "Chart.js", "CoinGecko API", "TypeScript"],
    link: "/projects/crypto",
    featured: false,
  },
  {
    title: "Social Media App",
    description:
      "Full-featured social network with real-time updates, user profiles, posts, comments, and messaging functionality.",
    image: "https://cdn-icons-png.flaticon.com/512/9431/9431147.png",
    tech: ["Next.js", "GraphQL", "MongoDB", "Apollo", "Redis"],
    link: "/projects/social",
    featured: false,
  },
];

const skills = [
  { name: "Next.js", level: "Expert" },
  { name: "React", level: "Expert" },
  { name: "TypeScript", level: "Expert" },
  { name: "Node.js", level: "Expert" },
  { name: "Python", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "PostgreSQL", level: "Advanced" },
  { name: "AWS", level: "Intermediate" },
  { name: "Docker", level: "Advanced" },
  { name: "GraphQL", level: "Advanced" },
];

const socialProfiles = [
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~016baf39b538bd48cd?mp_source=share",
    icon: "upwork",
    description: "View my Upwork profile and hire me for your project",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shiv-shankar-prasad-03b0a715b/",
    icon: "linkedin",
    description: "Connect with me on LinkedIn",
  },
  {
    name: "GitHub",
    url: "https://github.com/shivkr1357",
    icon: "github",
    description: "Check out my code repositories",
  },
  {
    name: "X",
    url: "https://x.com/itsindianguy",
    icon: "x",
    description: "Follow me on X for updates",
  },
];

export default function HireMePage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ItsIndianGuy",
    jobTitle: "Full-Stack Developer",
    description:
      "Expert full-stack developer specializing in Next.js, React, Node.js, and TypeScript",
    url: "https://www.itsindianguy.in/hire-me",
    sameAs: socialProfiles.map((profile) => profile.url),
    knowsAbout: skills.map((skill) => skill.name),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.itsindianguy.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hire Me",
        item: "https://www.itsindianguy.in/hire-me",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Hire a{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto mb-8">
                Expert in Next.js, React, Node.js, TypeScript, and modern web
                technologies. Available for freelance projects and long-term
                collaborations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Get in Touch
                </Link>
                <Link
                  href="#projects"
                  className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 border-2 border-neutral-300 dark:border-neutral-600 rounded-lg font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {socialProfiles.map((profile, index) => (
                <Link
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <SocialIcon iconName={profile.icon} size={64} />
                    </div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                      {profile.name}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                      {profile.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 bg-white dark:bg-neutral-800">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-600 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-bold text-lg text-neutral-800 dark:text-neutral-100 mb-2">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400">
                Real-world applications built with modern technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  className="group h-full flex flex-col bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-700 dark:to-neutral-600">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400">
                  Ready to start your project? Get in touch via any of these
                  platforms
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Link
                  href={
                    socialProfiles.find((p) => p.name === "Upwork")?.url || "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-green-50 dark:bg-green-900/20 rounded-xl hover:bg-green-100 dark:hover:bg-green-900/30 transition-all border-2 border-green-200 dark:border-green-800"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <SocialIcon iconName="upwork" size={48} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100">
                      Hire on Upwork
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      View profile and send proposal
                    </p>
                  </div>
                </Link>

                <Link
                  href={
                    socialProfiles.find((p) => p.name === "LinkedIn")?.url ||
                    "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border-2 border-blue-200 dark:border-blue-800"
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    <SocialIcon iconName="linkedin" size={48} />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100">
                      Connect on LinkedIn
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Professional networking
                    </p>
                  </div>
                </Link>
              </div>

              <div className="text-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
                >
                  Contact Form
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Hire Me Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-100 mb-12">
              Why Hire Me?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  Proven Experience
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Years of experience building production-ready applications
                  with modern technologies and best practices.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-purple-600 dark:text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  Fast Delivery
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Efficient development process with clear communication and
                  timely delivery of high-quality code.
                </p>
              </div>

              <div className="bg-white dark:bg-neutral-800 rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-green-600 dark:text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                  Full-Stack Expertise
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  End-to-end development from frontend to backend, database
                  design, and deployment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
