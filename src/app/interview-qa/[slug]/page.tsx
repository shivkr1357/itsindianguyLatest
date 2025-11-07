import type { Metadata, ResolvingMetadata } from "next";
import React, { Fragment } from "react";
import InterviewQAComponent from "@/components/InterviewQA/InterviewQAComponent";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;
  let description: string = "";
  let title: string = "";

  switch (slug) {
    case "react":
      description =
        "Prepare for React interviews with questions on JSX, state management, hooks, context API, and performance optimization.";
      title =
        "Comprehensive React Interview Questions on JSX, State, Hooks | ItsIndianGuy";
      break;
    case "javascript":
      description =
        "Get ready for JavaScript interviews with questions on syntax, closures, async programming, and more.";
      title =
        "Essential JavaScript Interview Questions on Syntax, Closures | ItsIndianGuy";
      break;
    case "cpp":
      description =
        "Enhance C++ interview readiness with questions on fundamentals, STL, memory management, and template metaprogramming.";
      title =
        "Detailed C++ Interview Questions on Fundamentals, STL, Memory | ItsIndianGuy";
      break;
    case "python":
      description =
        "Boost Python interview prep with questions on syntax, data structures, decorators, generators, and web frameworks.";
      title =
        "Comprehensive Python Interview Questions on Syntax, Decorators | ItsIndianGuy";
      break;
    case "next":
      description =
        "Prepare for Next.js interviews with questions on SSR, static site generation, API routes, and advanced configuration.";
      title =
        "Extensive Next.js Interview Questions on SSR, API Routes | ItsIndianGuy";
      break;
    case "nest":
      description =
        "Get ready for Nest.js interviews with questions on modules, controllers, providers, microservices, and GraphQL integration.";
      title =
        "In-Depth Nest.js Interview Questions on Modules, Controllers | ItsIndianGuy";
      break;
    case "node":
      description =
        "Master Node.js interviews with questions on event-driven architecture, async programming, streams, clustering, and optimization.";
      title =
        "Essential Node.js Interview Questions on Async, Streams, Optimization | ItsIndianGuy";
      break;
    case "typescript":
      description =
        "Enhance TypeScript interview prep with questions on type annotations, interfaces, generics, and advanced type manipulations.";
      title =
        "Comprehensive TypeScript Interview Questions on Annotations, Generics | ItsIndianGuy";
      break;
    case "dsa-interview":
      description =
        "Master Data Structures and Algorithms with comprehensive interview questions on arrays, linked lists, trees, graphs, sorting, and dynamic programming.";
      title =
        "Data Structures and Algorithms Interview Questions | ItsIndianGuy";
      break;
    case "database-interview":
      description =
        "Prepare for database interviews with questions on SQL, NoSQL, indexing, normalization, transactions, and query optimization.";
      title =
        "Database Interview Questions on SQL, NoSQL, Optimization | ItsIndianGuy";
      break;
    case "ml-interview":
      description =
        "Get ready for Machine Learning interviews with questions on algorithms, neural networks, deep learning, model evaluation, and deployment.";
      title =
        "Machine Learning Interview Questions on Algorithms, Deep Learning | ItsIndianGuy";
      break;
    default:
      break;
  }

  return {
    title: title,
    description: description,
    alternates: {
      canonical: `https://www.itsindianguy.in/interview-qa/${slug}`,
    },
    openGraph: {
      title: `${title} Interview Questions | ItsIndianGuy`,
      description: `Practice ${title} interview questions and prepare for technical interviews. Master ${title} concepts with our comprehensive Q&A collection.`,
      url: `https://www.itsindianguy.in/interview-qa/${slug}`,
      siteName: "ItsIndianGuy",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "https://www.itsindianguy.in/og-interview.jpg",
          width: 1200,
          height: 630,
          alt: `${title} Interview Questions`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} Interview Questions | ItsIndianGuy`,
      description: `Practice ${title} interview questions and prepare for technical interviews.`,
      images: ["https://www.itsindianguy.in/og-interview.jpg"],
    },
  };
}
const InterviewQAChild = () => {
  return (
    <Fragment>
      <InterviewQAComponent />
    </Fragment>
  );
};

export default InterviewQAChild;
