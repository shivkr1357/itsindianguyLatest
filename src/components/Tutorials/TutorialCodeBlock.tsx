"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface TutorialCodeBlockProps {
  code: string;
  language?: string;
}

const TutorialCodeBlock = ({ code, language = "bash" }: TutorialCodeBlockProps) => {
  return (
    <div className="bg-neutral-900 dark:bg-neutral-950 rounded-xl p-6 overflow-x-auto">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: 0,
          fontSize: "0.875rem",
          background: "transparent",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default TutorialCodeBlock;

