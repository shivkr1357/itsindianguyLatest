import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AWS Cloud Deployment - Deploy Full-Stack Apps | ItsIndianGuy",
  description: "Deploy full-stack applications to AWS. Learn EC2, S3, RDS, Lambda, CloudFront, and CI/CD with GitHub Actions for production deployments.",
  keywords: "AWS tutorial, cloud deployment, AWS EC2, AWS S3, AWS Lambda, DevOps, CI/CD, GitHub Actions",
};

export default function AWSDeploymentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        {/* Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/tutorials"
            className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tutorials
          </Link>
          
          <Link
            href="/tutorials/aws-deployment/content"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Start Tutorial
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/873/873120.png"
              alt="AWS"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-full text-sm font-medium">
              Intermediate
            </span>
            <span className="px-3 py-1 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 rounded-full text-sm font-medium">
              65 min
            </span>
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm font-medium">
              DevOps
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            AWS Cloud Deployment
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Deploy and scale full-stack applications on Amazon Web Services
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Introduction
          </h2>
          <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <p>
              Amazon Web Services (AWS) is the world&apos;s most comprehensive cloud platform, powering millions of applications globally. In this tutorial, you&apos;ll learn how to deploy full-stack applications to AWS using industry-standard services and best practices.
            </p>
            <p>
              From compute (EC2) to storage (S3), databases (RDS), serverless functions (Lambda), and content delivery (CloudFront), you&apos;ll master the essential AWS services needed to build scalable, reliable applications. We&apos;ll also set up CI/CD pipelines with GitHub Actions for automated deployments.
            </p>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            What You&apos;ll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "AWS account setup and IAM configuration",
              "Deploying apps to EC2 instances",
              "Static hosting with S3 and CloudFront",
              "Database management with RDS",
              "Serverless functions with AWS Lambda",
              "API Gateway for serverless APIs",
              "Environment variables and secrets management",
              "Load balancing and auto-scaling",
              "Setting up CI/CD with GitHub Actions",
              "Monitoring with CloudWatch",
              "Cost optimization strategies",
              "Security best practices and VPC setup"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-orange-600 dark:text-orange-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
            Prerequisites
          </h2>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>A full-stack application ready to deploy</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>AWS account (free tier available)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Basic understanding of cloud concepts</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Git and GitHub knowledge for CI/CD</span>
            </li>
          </ul>
        </div>

        {/* Tutorial Outline */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Tutorial Outline
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1. AWS Fundamentals",
                topics: ["AWS account setup", "IAM users and roles", "AWS Console overview", "AWS CLI installation"]
              },
              {
                title: "2. EC2 Deployment",
                topics: ["Launch EC2 instance", "SSH connection and setup", "Deploy Node.js application", "Configure security groups"]
              },
              {
                title: "3. Static Assets with S3",
                topics: ["Create S3 buckets", "Upload static files", "Configure bucket policies", "CloudFront CDN setup"]
              },
              {
                title: "4. Database with RDS",
                topics: ["Launch RDS instance", "Connect application to RDS", "Database backup strategies", "Performance optimization"]
              },
              {
                title: "5. Serverless with Lambda",
                topics: ["Create Lambda functions", "API Gateway integration", "Event-driven architecture", "Cold start optimization"]
              },
              {
                title: "6. CI/CD Pipeline",
                topics: ["GitHub Actions setup", "Automated testing", "Deploy on push", "Rollback strategies"]
              },
              {
                title: "7. Monitoring & Optimization",
                topics: ["CloudWatch metrics", "Log aggregation", "Cost monitoring", "Performance tuning"]
              }
            ].map((section, index) => (
              <div key={index} className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.topics.map((topic, idx) => (
                    <li key={idx} className="text-neutral-600 dark:text-neutral-400 flex items-start">
                      <span className="mr-2 text-orange-500">→</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Key Services */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            AWS Services Covered
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-orange-700 dark:text-orange-300">EC2</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Elastic Compute Cloud for running your application servers with full control over the environment.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">S3</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Simple Storage Service for hosting static assets, file uploads, and backups with 99.999999999% durability.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">RDS</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Relational Database Service for managed databases with automatic backups and scaling.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-yellow-700 dark:text-yellow-300">Lambda</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Serverless compute service to run code without managing servers. Pay only for what you use.
              </p>
            </div>
          </div>
        </div>

        {/* Start Tutorial */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Deploy to AWS?
            </h2>
            <p className="text-xl text-blue-50 mb-6">
              Learn AWS cloud deployment with real-world examples
            </p>
            <Link
              href="/tutorials/aws-deployment/content"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Tutorial
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
          <ul className="space-y-2">
            <li>📖 AWS Official Documentation</li>
            <li>📖 AWS Well-Architected Framework</li>
            <li>💻 Deployment Scripts and Templates</li>
            <li>🎥 Step-by-Step Video Guide</li>
            <li>💬 AWS Community and Support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

