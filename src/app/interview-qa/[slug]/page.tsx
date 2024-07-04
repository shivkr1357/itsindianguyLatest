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

   return {
      title: `${
         slug.charAt(0).toUpperCase() + slug.slice(1)
      } InterviewQA |  ItsIndianGuy`,
      description:
         "Explore interview questions in various programming languages such as JavaScript, Python, C++ and more. Enhance your preparation with comprehensive language-specific content.",
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
