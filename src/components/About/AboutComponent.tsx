import Image from "next/image";
import React from "react";
import Link from "next/link";

const stats = [
  { label: "Tutorials", value: "50+", icon: "📚" },
  { label: "Blog Posts", value: "100+", icon: "✍️" },
  { label: "Students", value: "10k+", icon: "👨‍💻" },
  { label: "Countries", value: "25+", icon: "🌍" },
];

const skills = [
  { name: "Web Development", level: 95, color: "from-blue-500 to-cyan-500" },
  {
    name: "Mobile Development",
    level: 90,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Backend Development",
    level: 85,
    color: "from-purple-500 to-pink-500",
  },
  { name: "DevOps & Cloud", level: 80, color: "from-orange-500 to-red-500" },
];

const AboutComponent = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-purple-50/30 to-pink-50/20 dark:from-neutral-900 dark:via-purple-950/20 dark:to-pink-950/10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-800 dark:to-purple-950/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                Empowering Developers Worldwide
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-neutral-800 dark:text-neutral-100">
                About
              </span>
              <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                ItsIndianGuy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Dedicated to providing high-quality programming tutorials, web
              development guides, and tech education for developers at every
              level.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Our <span className="text-purple-500">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  🎯
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                  Quality Content
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Deliver comprehensive, accurate, and up-to-date programming
                  tutorials
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                  Empower Developers
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Help developers grow their skills and advance their careers
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 rounded-2xl">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl">
                  🌟
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                  Build Community
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Create a supportive community of passionate developers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Meet the <span className="text-purple-500">Founder</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-96 md:h-full bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/30 dark:to-pink-950/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
                      <div className="relative w-full h-full bg-white dark:bg-neutral-800 rounded-full p-4 shadow-2xl">
                        <Image
                          src="/profile/profile.jpg"
                          alt="Shiv Shankar Prasad"
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                    Shiv Shankar Prasad
                  </h3>
                  <p className="text-lg text-purple-500 font-semibold mb-4">
                    Founder & Full-Stack Developer
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    A passionate tech enthusiast with over 5 years of experience
                    in Software Development and Mobile Development. Dedicated to
                    sharing knowledge and helping developers grow through
                    comprehensive tutorials and practical insights.
                  </p>

                  {/* Skills */}
                  <div className="space-y-4 mb-6">
                    {skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold text-neutral-600 dark:text-neutral-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                  >
                    Get in Touch
                    <svg
                      className="w-5 h-5"
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
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50/30 dark:from-neutral-800 dark:to-purple-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                Why Choose <span className="text-purple-500">Us?</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                    ✨
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                      Practical Learning
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Real-world projects and hands-on examples that you can
                      apply immediately in your career.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                    📖
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                      Comprehensive Content
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      From beginner to advanced, covering all aspects of modern
                      web development and programming.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                      Interview Ready
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Curated interview questions and preparation materials to
                      help you land your dream job.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl">
                    🔄
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                      Regular Updates
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      Stay current with weekly updates on the latest
                      technologies and industry trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-white to-purple-50/50 dark:from-neutral-800 dark:to-purple-950/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-200 dark:border-neutral-700 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are mastering new skills with our
              tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tutorials"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
              >
                Browse Tutorials
                <svg
                  className="w-5 h-5"
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
              <Link
                href="/newsletter"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-neutral-700 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white dark:hover:bg-purple-500 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg font-semibold"
              >
                Subscribe Newsletter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutComponent;
