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

   switch (slug) {
      case "react":
         description =
            "Get ready for your React interviews with our detailed set of questions. From fundamental concepts like JSX and state management to advanced topics like hooks, context API, and performance optimization, these questions will help you showcase your React skills.";
         break;
      case "javascript":
         description =
            "Prepare for your next JavaScript interview with our comprehensive set of questions covering topics from basic syntax to advanced concepts like closures, asynchronous programming, and more. Each question is designed to help you master JavaScript and ace your interviews";
         break;
      case "cpp":
         description =
            "Enhance your C++ interview readiness with our detailed set of questions. Covering fundamental concepts, STL, memory management, and advanced topics like template metaprogramming, these questions are designed to test and improve your C++ knowledge";
         break;
      case "python":
         description =
            "Boost your Python interview preparation with our extensive list of questions. Covering everything from basic syntax and data structures to advanced topics like decorators, generators, and web frameworks, these questions will help you become a Python expert.";
         break;
      case "next":
         description =
            "Prepare for your Next.js interviews with our comprehensive set of questions. Covering server-side rendering, static site generation, API routes, and advanced configuration, these questions will help you demonstrate your Next.js expertise and build dynamic, efficient web applications.";
         break;
      case "nest":
         description =
            "Get ready for your Nest.js interviews with our detailed questions. From core concepts like modules, controllers, and providers to advanced topics like microservices and GraphQL integration, these questions will help you showcase your proficiency in building scalable server-side applications with Nest.js.";
         break;
      case "node":
         description =
            "Master your Node.js interviews with our comprehensive set of questions. From core concepts like event-driven architecture and asynchronous programming to advanced topics like streams, clustering, and performance optimization, these questions will help you prove your expertise in building efficient server-side applications with Node.js";
         break;
      case "typescript":
         description =
            "Enhance your TypeScript interview preparation with our extensive list of questions. Covering type annotations, interfaces, generics, and advanced type manipulations, these questions will help you master TypeScript and demonstrate your skills in writing robust, type-safe JavaScript.";
         break;

      default:
         break;
   }

   return {
      title: `${
         slug.charAt(0).toUpperCase() + slug.slice(1)
      } InterviewQA |  ItsIndianGuy`,
      description: description,

      alternates: {
         canonical: `https://itsindianguy.in/interview-qa/${slug}`,
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
