"use client";
import NextJSContent from "./content/NextJSContent";
import TypeScriptContent from "./content/TypeScriptContent";
import ReactPerformanceContent from "./content/ReactPerformanceContent";
import NodeJSContent from "./content/NodeJSContent";
import MachineLearningContent from "./content/MachineLearningContent";
import DockerContent from "./content/DockerContent";
import GraphQLContent from "./content/GraphQLContent";
import NodeJSPerformanceContent from "./content/NodeJSPerformanceContent";
import ModernCSSContent from "./content/ModernCSSContent";
import TypeScriptPracticesContent from "./content/TypeScriptPracticesContent";
import ServerComponentsContent from "./content/ServerComponentsContent";
import NextJS14Content from "./content/NextJS14Content";
import WebSecurityContent from "./content/WebSecurityContent";
import MongoDBContent from "./content/MongoDBContent";

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

  return <article className="space-y-8">{renderContent()}</article>;
};

export default BlogPostContent;
