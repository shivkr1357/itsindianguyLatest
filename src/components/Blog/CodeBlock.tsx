"use client";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "javascript", title, className = "" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`bg-neutral-900 dark:bg-neutral-950 rounded-xl overflow-hidden ${className}`}>
      <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          {title && (
            <span className="ml-3 text-xs text-neutral-400">{title}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-lg transition-all text-xs font-medium"
          title="Copy code"
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="p-6">
        <pre className="text-sm overflow-x-auto">
          <code className="text-green-400 font-mono block whitespace-pre">
            {code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;

