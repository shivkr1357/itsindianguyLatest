import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

export const metadata: Metadata = {
  title: "मां का विश्वास: हार से जीत तक | ItsIndianGuy",
  description:
    "एक बेटे की कहानी जो लगातार असफलताओं के बाद भी मां के भरोसे से फिर खड़ा हुआ और अपनी मंजिल तक पहुंचा।",
  keywords:
    "हिंदी कहानी, motivational story, मां का विश्वास, struggle story, hindi stories, ItsIndianGuy",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/hindi-story-mothers-belief",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "मां का विश्वास: हार से जीत तक | ItsIndianGuy",
    description: "मां के भरोसे और अपने प्रयास से हार को जीत में बदलने की कहानी।",
    url: "https://www.itsindianguy.in/blog/hindi-story-mothers-belief",
    siteName: "ItsIndianGuy - हिंदी कहानियां",
    locale: "hi_IN",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "मां का विश्वास: हार से जीत तक",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "मां का विश्वास: हार से जीत तक | ItsIndianGuy",
    description: "हार के बाद भी हिम्मत और भरोसे से जीत मिलती है।",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function HindiStoryMothersBelief() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="मां का विश्वास: हार से जीत तक"
        url="/blog/hindi-story-mothers-belief"
        description="एक बेटे की कहानी जो लगातार असफलताओं के बाद भी मां के भरोसे से फिर खड़ा हुआ।"
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link
          href="/blog/hindi-stories"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          हिंदी कहानियां पर वापस
        </Link>

        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800&h=600&fit=crop&q=80"
              alt="मां का विश्वास"
              width={800}
              height={600}
              className="rounded-xl shadow-lg w-full max-w-4xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
            मां का विश्वास: हार से जीत तक
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2026-03-24">24 मार्च, 2026</time>
            <span>•</span>
            <span>11 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              बार-बार की असफलता
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              विवेक ने कई नौकरी इंटरव्यू दिए, लेकिन हर बार रिजेक्शन मिला। धीरे-धीरे उसने खुद पर शक करना शुरू कर दिया।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              उसे लगता था कि अब शायद उससे नहीं होगा। तभी उसकी मां ने कहा - "हार मानना तुम्हारा स्वभाव नहीं है।"
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              मां की सीख
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              मां ने विवेक को रोज़ एक घंटा skill improve करने और एक mock interview देने का नियम दिया। उन्होंने कहा, "रिजेक्शन तुम्हारी पहचान नहीं, तुम्हारी तैयारी का संकेत है।"
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-900 dark:text-orange-100 font-[var(--font-hindi)]">
                <strong>सीख:</strong> जब खुद पर भरोसा कम हो जाए, तब अपने करीबियों का विश्वास हमें दोबारा खड़ा कर देता है।
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              जीत का दिन
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              दो महीनों की लगातार तैयारी के बाद विवेक ने फिर इंटरव्यू दिया। इस बार वह घबराया नहीं, क्योंकि वह सच में तैयार था।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              उसे नौकरी मिल गई। उसने सबसे पहले अपनी मां को फोन किया और कहा - "आपका भरोसा ही मेरी सबसे बड़ी ताकत था।"
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
