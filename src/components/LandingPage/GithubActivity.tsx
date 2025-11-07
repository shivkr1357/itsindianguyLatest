"use client";
import React from 'react';
import Link from 'next/link';

const recentActivity = [
  {
    type: "commits",
    count: 78,
    period: "November 2025",
    repositories: [
      { name: "skillofinit/skillofin-website", commits: 32, color: "from-green-500 to-emerald-500" },
      { name: "shivkr1357/slt-toolkit", commits: 18, color: "from-blue-500 to-cyan-500" },
      { name: "shivkr1357/itsindianguyLatest", commits: 15, color: "from-purple-500 to-pink-500" },
      { name: "siddhant13-99/blurrd_backend", commits: 10, color: "from-orange-500 to-red-500" },
      { name: "skillofinit/skillofin-backend", commits: 3, color: "from-teal-500 to-green-500" },
    ]
  }
];

const pullRequests = [
  {
    title: "Design fix",
    repo: "shivkr1357/slt-toolkit",
    additions: 221,
    deletions: 59,
    comments: 1,
    date: "Nov 1",
    status: "merged"
  }
];

const stats = {
  totalContributions: 544,
  mergedPRs: 4,
  openPRs: 0,
  repositories: 5
};

const GithubActivity = () => {
  const maxCommits = Math.max(...recentActivity[0].repositories.map(r => r.commits));

  return (
    <div className="max-w-6xl mx-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
          <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
            {stats.totalContributions}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Total Contributions
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
            {recentActivity[0].count}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Commits This Month
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
            {stats.mergedPRs}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Merged PRs
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
          <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-1">
            {stats.repositories}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            Active Repos
          </div>
        </div>
      </div>

      {/* Recent Commits */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
            <span className="text-3xl">💻</span>
            November 2025 Activity
          </h3>
          <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-sm font-semibold">
            {recentActivity[0].count} commits
          </span>
        </div>

        <div className="space-y-3">
          {recentActivity[0].repositories.map((repo, index) => {
            const percentage = (repo.commits / maxCommits) * 100;
            return (
              <div
                key={index}
                className="group p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {repo.name}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {repo.commits} commits
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${repo.color} bg-clip-text text-transparent`}>
                      {repo.commits}
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${repo.color} transition-all duration-500`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pull Requests */}
      <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700">
        <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-2">
          <span className="text-3xl">🔀</span>
          Recent Pull Requests
        </h3>

        <div className="space-y-4">
          {pullRequests.map((pr, index) => (
            <div
              key={index}
              className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-xl border border-purple-200 dark:border-purple-800"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🔧</span>
                    <h4 className="font-bold text-lg text-neutral-800 dark:text-neutral-100">
                      {pr.title}
                    </h4>
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">
                      {pr.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                    {pr.repo}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                        <span className="text-green-600 dark:text-green-400 font-semibold">
                          +{pr.additions}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
                        <span className="text-red-600 dark:text-red-400 font-semibold">
                          -{pr.deletions}
                        </span>
                      </div>
                    </div>
                    <span className="text-neutral-500 dark:text-neutral-400">
                      💬 {pr.comments} comment
                    </span>
                  </div>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-4">
                  {pr.date}
                </span>
              </div>
            </div>
          ))}

          <div className="p-4 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl text-center">
            <p className="text-neutral-600 dark:text-neutral-400 mb-2">
              <span className="font-bold text-purple-600 dark:text-purple-400">4 merged</span> pull requests in slt-toolkit
            </p>
          </div>
        </div>
      </div>

      {/* GitHub Link */}
      <div className="mt-8 text-center">
        <Link
          href="https://github.com/shivkr1357"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-neutral-800 to-neutral-900 hover:from-neutral-900 hover:to-black text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View GitHub Profile
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default GithubActivity;
