import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

export const metadata: Metadata = {
  title: "अनुशासन की ताकत: छोटा कदम, बड़ी जीत | ItsIndianGuy",
  description:
    "यह कहानी है एक छात्र की जिसने रोज़ थोड़ा-थोड़ा अनुशासन अपनाकर अपनी जिंदगी बदल दी। जानिए कैसे consistency से बड़े सपने पूरे होते हैं।",
  keywords:
    "हिंदी कहानी, अनुशासन, motivation, consistency, inspiring story, hindi stories, ItsIndianGuy",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/hindi-story-discipline-success",
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
    title: "अनुशासन की ताकत: छोटा कदम, बड़ी जीत | ItsIndianGuy",
    description:
      "यह कहानी है एक छात्र की जिसने रोज़ अनुशासन अपनाकर अपनी जिंदगी बदल दी।",
    url: "https://www.itsindianguy.in/blog/hindi-story-discipline-success",
    siteName: "ItsIndianGuy - हिंदी कहानियां",
    locale: "hi_IN",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "अनुशासन की ताकत: छोटा कदम, बड़ी जीत",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "अनुशासन की ताकत: छोटा कदम, बड़ी जीत | ItsIndianGuy",
    description: "रोज़ की consistency से बड़े सपने पूरे होते हैं।",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function HindiStoryDisciplineSuccess() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="अनुशासन की ताकत: छोटा कदम, बड़ी जीत"
        url="/blog/hindi-story-discipline-success"
        description="यह कहानी है एक छात्र की जिसने रोज़ थोड़ा-थोड़ा अनुशासन अपनाकर अपनी जिंदगी बदल दी।"
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
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop&q=80"
              alt="अनुशासन की ताकत"
              width={800}
              height={600}
              className="rounded-xl shadow-lg w-full max-w-4xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
            अनुशासन की ताकत: छोटा कदम, बड़ी जीत
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2026-03-24">24 मार्च, 2026</time>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              कहानी की शुरुआत
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              आरव बारहवीं का छात्र था। वह होशियार था, लेकिन उसकी सबसे बड़ी समस्या थी टालमटोल। हर दिन वह सोचता कि कल से पूरी मेहनत करूंगा।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              एक दिन टेस्ट में कम नंबर आए तो उसे समझ आया कि टैलेंट से ज्यादा जरूरी है रोज़ का अनुशासन।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              छोटा कदम, बड़ा असर
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              आरव ने बड़ा प्लान बनाने के बजाय सिर्फ 45 मिनट रोज़ पढ़ने का नियम बनाया। मोबाइल दूर रखता, टाइमर लगाता और हर दिन वही routine दोहराता।
            </p>
            <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg">
              <p className="text-orange-900 dark:text-orange-100 font-[var(--font-hindi)]">
                <strong>सीख:</strong> अनुशासन का मतलब एकदम परफेक्ट होना नहीं, बल्कि रोज़ थोड़ा बेहतर होना है।
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              परिणाम और संदेश
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              तीन महीनों में आरव का आत्मविश्वास बढ़ गया। उसके नंबर बेहतर हुए और सबसे बड़ी बात, वह खुद पर भरोसा करना सीख गया।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              अगर आप भी किसी बड़े लक्ष्य के पीछे हैं, तो आज से छोटा कदम उठाइए। लगातार कोशिश ही जीत की असली चाबी है।
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
