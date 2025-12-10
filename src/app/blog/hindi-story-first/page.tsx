import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

export const metadata: Metadata = {
  title: "एक नई शुरुआत: सफलता की कहानी | ItsIndianGuy",
  description:
    "एक युवा की inspiring story जो अपने सपनों को पूरा करने के लिए संघर्ष करता है। जानो कैसे मेहनत और हिम्मत से कोई भी मंजिल हासिल की जा सकती है।",
  keywords:
    "हिंदी कहानी, hindi story, inspiring story, success story, real life story, motivation, हिंदी stories, ItsIndianGuy",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/hindi-story-first",
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
    title: "एक नई शुरुआत: सफलता की कहानी | ItsIndianGuy",
    description:
      "एक युवा की inspiring story जो अपने सपनों को पूरा करने के लिए संघर्ष करता है।",
    url: "https://www.itsindianguy.in/blog/hindi-story-first",
    siteName: "ItsIndianGuy - हिंदी कहानियां",
    locale: "hi_IN",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "एक नई शुरुआत: सफलता की कहानी",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "एक नई शुरुआत: सफलता की कहानी | ItsIndianGuy",
    description: "एक युवा की inspiring story जो अपने सपनों को पूरा करने के लिए संघर्ष करता है।",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function HindiStoryFirst() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="एक नई शुरुआत: सफलता की कहानी"
        url="/blog/hindi-story-first"
        description="एक युवा की inspiring story जो अपने सपनों को पूरा करने के लिए संघर्ष करता है।"
      />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog/hindi-stories"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          हिंदी कहानियां पर वापस
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-center mb-8">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&q=80"
              alt="एक नई शुरुआत - सफलता की कहानी"
              width={800}
              height={600}
              className="rounded-xl shadow-lg w-full max-w-4xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
            एक नई शुरुआत: सफलता की कहानी
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2025-12-09">9 दिसंबर, 2025</time>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 rounded-xl mb-8">
            <p className="text-lg font-semibold mb-2 font-[var(--font-hindi)]">📖 एक प्रेरणादायक कहानी</p>
            <p className="text-white/90 font-[var(--font-hindi)]">
              ये कहानी है एक युवा की जो अपने सपनों को पूरा करने के लिए संघर्ष करता है और आखिरकार सफल होता है।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              कहानी की शुरुआत
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&h=600&fit=crop&q=80"
                alt="छोटे गाँव का दृश्य"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              राजू एक छोटे से गाँव से था। उसके पिता एक किसान थे और परिवार की आर्थिक स्थिति ठीक नहीं थी। लेकिन राजू के मन में एक सपना था - वो एक successful software engineer बनना चाहता था।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              गाँव में computer की सुविधा नहीं थी, लेकिन राजू ने हिम्मत नहीं हारी। उसने अपने दोस्त से किताबें उधार लीं और एक cyber cafe में जाकर coding सीखनी शुरू की।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              संघर्ष की कहानी
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop&q=80"
                alt="Cyber cafe में coding करते हुए"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <p className="font-[var(--font-hindi)]">
                राजू को cyber cafe में जाने के लिए रोज 20 रुपये चाहिए थे। पैसों की कमी थी, लेकिन राजू ने एक तरकीब निकाली - उसने छोटे-मोटे काम करके पैसे जमा करने शुरू किए।
              </p>
              <p className="font-[var(--font-hindi)]">
                वो सुबह जल्दी उठकर किताबें पढ़ता, फिर cyber cafe जाकर coding practice करता। कई बार उसे भूखा रहना पड़ा, लेकिन उसने कभी हार नहीं मानी।
              </p>
              <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-4 rounded-r-lg mt-4">
                <p className="text-orange-900 dark:text-orange-100 font-[var(--font-hindi)]">
                  <strong>सीख:</strong> अगर तुम्हारा सपना सच में बड़ा है, तो तुम्हें कोई भी मंजिल हासिल करने से नहीं रोक सकता।
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              सफलता की राह
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop&q=80"
                alt="College में पढ़ाई करते हुए"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              दो साल की मेहनत के बाद, राजू ने एक scholarship exam दिया और उसे एक अच्छे college में admission मिल गया। वहाँ उसने और भी ज्यादा मेहनत की और अपने skills को बेहतर बनाया।
            </p>
            <div className="mt-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=600&fit=crop&q=80"
                alt="Tech company में काम करते हुए"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mt-4 font-[var(--font-hindi)]">
              आज राजू एक बड़ी tech company में senior engineer है और अपने गाँव में एक computer center खोलने की योजना बना रहा है ताकि दूसरे बच्चे भी अपने सपने पूरे कर सकें।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              कहानी से सीख
            </h2>
            <div className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <p className="font-[var(--font-hindi)]">
                <strong>1. हिम्मत मत हारो:</strong> अगर तुम्हारा सपना सच में बड़ा है, तो challenges तुम्हें रोक नहीं सकतीं।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>2. मेहनत करो:</strong> Success के लिए मेहनत बहुत जरूरी है। कोई भी रातों-रात successful नहीं बनता।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>3. अपने लक्ष्य पर focus करो:</strong> दूसरे क्या कह रहे हैं, उस पर ध्यान मत दो। अपने goal पर concentrate करो।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>4. दूसरों की मदद करो:</strong> जब तुम successful हो जाओ, तो दूसरों की मदद करना मत भूलो।
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              निष्कर्ष
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&q=80"
                alt="सफलता और उपलब्धि"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              राजू की कहानी हमें सिखाती है कि अगर हम चाहें तो कोई भी मंजिल हासिल की जा सकती है। बस जरूरत है हिम्मत, मेहनत और अपने सपनों पर विश्वास की।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              अगर तुम भी अपने सपने पूरे करना चाहते हो, तो आज से ही शुरुआत करो। हर बड़ी यात्रा एक छोटे से कदम से शुरू होती है।
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
