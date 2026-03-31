import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study Materials PDF Downloads | ItsIndianGuy",
  description:
    "Download curated study materials in PDF format for interviews, web development, and programming fundamentals. All questions are based on 100+ previous interview experiences.",
};

type StudyDoc = {
  title: string;
  description: string;
  file?: string;
  isLocked?: boolean;
  priceLabel?: string;
  unlockUrl?: string;
};

type StudyTopic = {
  topic: string;
  docs: StudyDoc[];
};

const studyTopics: StudyTopic[] = [
  {
    topic: "JavaScript",
    docs: [
      {
        title: "JavaScript Interview Notes - Free",
        description: "Core concepts, tricky questions, and quick revision notes.",
        file: "/study-materials/javascript-interview-notes.pdf",
      },
      {
        title: "JavaScript Premium Question Bank",
        description: "120+ interview problems with answers and explanations.",
        isLocked: true,
        priceLabel: "Rs 199",
        unlockUrl: "https://buymeachai.ezee.li/shivkr1357",
      },
    ],
  },
  {
    topic: "React",
    docs: [
      {
        title: "React Quick Revision - Free",
        description: "Hooks, patterns, and practical interview-focused summaries.",
        file: "/study-materials/react-quick-revision.pdf",
      },
      {
        title: "React Premium Interview Pack",
        description: "Advanced patterns, architecture, and real interview drills.",
        isLocked: true,
        priceLabel: "Rs 299",
        unlockUrl: "https://buymeachai.ezee.li/shivkr1357",
      },
    ],
  },
  {
    topic: "DSA",
    docs: [
      {
        title: "DSA Cheat Sheet - Free",
        description: "Important algorithms, complexities, and problem-solving tips.",
        file: "/study-materials/dsa-cheat-sheet.pdf",
      },
      {
        title: "DSA Premium Sheet Set",
        description: "Company-wise sheets with handpicked must-solve questions.",
        isLocked: true,
        priceLabel: "Rs 399",
        unlockUrl: "https://buymeachai.ezee.li/shivkr1357",
      },
    ],
  },
];

export default function StudyMaterialsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-green-50/20 to-teal-50/10 dark:from-neutral-900 dark:via-green-950/10 dark:to-teal-950/5">
      <section className="relative bg-gradient-to-b from-white to-green-50/20 dark:from-neutral-800 dark:to-green-950/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500" />
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-neutral-100 mb-5">
              Study Materials
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
              Download free PDFs and unlock premium packs topic-wise. All questions are from 100+ previous interview experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-10">
            {studyTopics.map((topic) => (
              <div key={topic.topic}>
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-5">
                  {topic.topic}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {topic.docs.map((doc) => (
                    <article
                      key={`${topic.topic}-${doc.title}`}
                      className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700 flex flex-col"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                          {doc.title}
                        </h3>
                        {doc.isLocked ? (
                          <span className="shrink-0 px-2.5 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                            Locked
                          </span>
                        ) : (
                          <span className="shrink-0 px-2.5 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                            Free
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 flex-grow">
                        {doc.description}
                      </p>

                      {doc.isLocked ? (
                        <div className="space-y-3">
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Price:{" "}
                            <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                              {doc.priceLabel || "Paid"}
                            </span>
                          </p>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            Based on 100+ previous interview experiences.
                          </p>
                          <a
                            href={doc.unlockUrl || "https://buymeachai.ezee.li/shivkr1357"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-medium transition-all hover:scale-105"
                          >
                            Unlock to Download
                          </a>
                        </div>
                      ) : (
                        <a
                          href={doc.file}
                          download
                          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white font-medium transition-all hover:scale-105"
                        >
                          Download PDF
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Put your PDF files in <code>public/study-materials/</code>. For
              locked packs, set <code>isLocked: true</code> and add an{" "}
              <code>unlockUrl</code> to your payment/checkout link.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
