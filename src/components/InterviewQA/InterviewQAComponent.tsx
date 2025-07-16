"use client";
import { usePathname } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { interviewQA } from "@/config/InterviewQA";
import Head from "next/head";

const InterviewQAComponent = () => {
  const pathname = usePathname();
  const [qa, setQa] = useState<any[]>([]);
  const [canonical, setCanonical] = useState<string>("");
  const language = pathname.split("/")[2];

  useEffect(() => {
    setCanonical(`https://www.itsindianguy.in/${pathname}`);
    setQa(interviewQA.filter((item) => item.slug === language));
  }, [language, pathname]);

  return (
    <Fragment>
      <Head>
        <title>InterviewQA | ItsIndianguy</title>
        <meta
          name="description"
          content="Top interview questions and answers for developers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
      </Head>
      <main className="mt-16 min-h-screen bg-neutral-50 dark:bg-neutral-900 p-5">
        {qa.map((item) => (
          <div key={item.id} className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
              {item.slug.toUpperCase() + " Interview Questions"}
            </h1>
            <div className="space-y-8">
              {item.data.map((subItem: any, index: number) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                    <span className="text-primary-200">{index + 1 + ": "}</span>
                    {subItem.que}
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    <span className="font-semibold text-primary-200">
                      {"Ans: "}
                    </span>
                    {subItem.ans}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </Fragment>
  );
};

export default InterviewQAComponent;
