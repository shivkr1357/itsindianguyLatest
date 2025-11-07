"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic imports for better code splitting
const NextJSContent = dynamic(() => import("./content/NextJSContent"), {
  loading: () => <ContentSkeleton />,
});
const TypeScriptContent = dynamic(() => import("./content/TypeScriptContent"), {
  loading: () => <ContentSkeleton />,
});
const ReactPerformanceContent = dynamic(
  () => import("./content/ReactPerformanceContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const NodeJSContent = dynamic(() => import("./content/NodeJSContent"), {
  loading: () => <ContentSkeleton />,
});
const MachineLearningContent = dynamic(
  () => import("./content/MachineLearningContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const DockerContent = dynamic(() => import("./content/DockerContent"), {
  loading: () => <ContentSkeleton />,
});
const GraphQLContent = dynamic(() => import("./content/GraphQLContent"), {
  loading: () => <ContentSkeleton />,
});
const NodeJSPerformanceContent = dynamic(
  () => import("./content/NodeJSPerformanceContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const ModernCSSContent = dynamic(() => import("./content/ModernCSSContent"), {
  loading: () => <ContentSkeleton />,
});
const TypeScriptPracticesContent = dynamic(
  () => import("./content/TypeScriptPracticesContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const ServerComponentsContent = dynamic(
  () => import("./content/ServerComponentsContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const NextJS14Content = dynamic(() => import("./content/NextJS14Content"), {
  loading: () => <ContentSkeleton />,
});
const WebSecurityContent = dynamic(
  () => import("./content/WebSecurityContent"),
  {
    loading: () => <ContentSkeleton />,
  }
);
const MongoDBContent = dynamic(() => import("./content/MongoDBContent"), {
  loading: () => <ContentSkeleton />,
});

// Loading skeleton
function ContentSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white dark:bg-neutral-800 rounded-2xl p-6 md:p-8 shadow-lg border border-neutral-200 dark:border-neutral-700"
        >
          <div className="h-8 w-64 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
            <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-700 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

interface BlogPostContentProps {
  slug: string;
}

const BlogPostContent = ({ slug }: BlogPostContentProps) => {
  // Render different content based on slug
  const renderContent = () => {
    switch (slug) {
      case "getting-started-with-nextjs-14":
        return <NextJSContent />;
      case "mastering-typescript-generics":
        return <TypeScriptContent />;
      case "react-performance-optimization-tips":
        return <ReactPerformanceContent />;
      case "building-rest-apis-with-nodejs":
        return <NodeJSContent />;
      case "introduction-to-machine-learning":
        return <MachineLearningContent />;
      case "docker-for-beginners":
        return <DockerContent />;
      case "graphql-vs-rest":
        return <GraphQLContent />;
      case "nodejs-performance":
        return <NodeJSPerformanceContent />;
      case "modern-css":
        return <ModernCSSContent />;
      case "typescript-practices":
        return <TypeScriptPracticesContent />;
      case "server-components":
        return <ServerComponentsContent />;
      case "nextjs-14":
        return <NextJS14Content />;
      case "web-security":
        return <WebSecurityContent />;
      case "mongodb-mastery":
        return <MongoDBContent />;
      default:
        return <NextJSContent />; // Default fallback
    }
  };

  return (
    <Suspense fallback={<ContentSkeleton />}>
      <article className="space-y-8">{renderContent()}</article>
    </Suspense>
  );
};

export default BlogPostContent;
