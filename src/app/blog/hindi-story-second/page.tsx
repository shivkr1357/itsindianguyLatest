import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StickyShareButton from "@/components/Blog/StickyShareButton";

export const metadata: Metadata = {
  title: "विश्वास और साहस: एक जीत की कहानी | ItsIndianGuy",
  description:
    "एक लड़की की कहानी जो समाज की बाधाओं को पार करके अपने सपने को सच करती है। जानो कैसे आत्मविश्वास और दृढ़ संकल्प से हर मुश्किल को हराया जा सकता है।",
  keywords:
    "हिंदी कहानी, hindi story, inspiring story, success story, real life story, motivation, women empowerment, हिंदी stories, ItsIndianGuy",
  authors: [{ name: "ItsIndianGuy", url: "https://www.itsindianguy.in/about" }],
  creator: "ItsIndianGuy",
  publisher: "ItsIndianGuy",
  alternates: {
    canonical: "https://www.itsindianguy.in/blog/hindi-story-second",
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
    title: "विश्वास और साहस: एक जीत की कहानी | ItsIndianGuy",
    description:
      "एक लड़की की कहानी जो समाज की बाधाओं को पार करके अपने सपने को सच करती है।",
    url: "https://www.itsindianguy.in/blog/hindi-story-second",
    siteName: "ItsIndianGuy - हिंदी कहानियां",
    locale: "hi_IN",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "विश्वास और साहस: एक जीत की कहानी",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "विश्वास और साहस: एक जीत की कहानी | ItsIndianGuy",
    description: "एक लड़की की कहानी जो समाज की बाधाओं को पार करके अपने सपने को सच करती है।",
    creator: "@itsindianguy",
    site: "@itsindianguy",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&q=80"],
  },
};

export default function HindiStorySecond() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      <StickyShareButton
        title="विश्वास और साहस: एक जीत की कहानी"
        url="/blog/hindi-story-second"
        description="एक लड़की की कहानी जो समाज की बाधाओं को पार करके अपने सपने को सच करती है।"
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
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&q=80"
              alt="विश्वास और साहस - एक जीत की कहानी"
              width={800}
              height={600}
              className="rounded-xl shadow-lg w-full max-w-4xl"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
            विश्वास और साहस: एक जीत की कहानी
          </h1>
          <div className="flex items-center gap-4 text-neutral-600 dark:text-neutral-400 text-sm">
            <time dateTime="2025-12-15">15 दिसंबर, 2025</time>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-6 rounded-xl mb-8">
            <p className="text-lg font-semibold mb-2 font-[var(--font-hindi)]">📖 एक प्रेरणादायक कहानी</p>
            <p className="text-white/90 font-[var(--font-hindi)]">
              ये कहानी है प्रिया की, जो एक छोटे से शहर से थी और अपने सपनों को पूरा करने के लिए हर बाधा को पार करती है।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              शुरुआत
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&h=600&fit=crop&q=80"
                alt="छोटे शहर की लड़की"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              प्रिया एक छोटे से शहर में रहती थी। उसके परिवार में लड़कियों को ज्यादा पढ़ाई करने की इजाजत नहीं थी। लेकिन प्रिया के मन में एक सपना था - वो एक doctor बनना चाहती थी और लोगों की सेवा करना चाहती थी।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              जब उसने अपने पिता से medical college में admission लेने की बात कही, तो उन्होंने मना कर दिया। "लड़कियों को इतनी दूर पढ़ने भेजना सही नहीं है," उन्होंने कहा। लेकिन प्रिया ने हार नहीं मानी।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              संघर्ष और दृढ़ संकल्प
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop&q=80"
                alt="पढ़ाई करते हुए"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
              <p className="font-[var(--font-hindi)]">
                प्रिया ने फैसला किया कि वो अपने सपने को पूरा करेगी, चाहे कुछ भी हो। उसने अपनी माँ से मदद मांगी, जो उसकी हिम्मत से प्रभावित हुईं। माँ ने अपनी जमा-पूंजी से प्रिया की पढ़ाई का खर्च उठाने का फैसला किया।
              </p>
              <p className="font-[var(--font-hindi)]">
                प्रिया ने बहुत मेहनत की। वो सुबह 4 बजे उठकर पढ़ाई करती, फिर school जाती, और रात में भी पढ़ती रहती। उसने medical entrance exam की तैयारी की और आखिरकार एक अच्छे medical college में admission मिल गया।
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded-r-lg mt-4">
                <p className="text-purple-900 dark:text-purple-100 font-[var(--font-hindi)]">
                  <strong>सीख:</strong> अगर तुम्हारा सपना सच में बड़ा है और तुम उसके लिए मेहनत करने को तैयार हो, तो कोई भी तुम्हें रोक नहीं सकता।
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              चुनौतियों का सामना
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop&q=80"
                alt="Medical college में पढ़ाई"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              College में भी प्रिया को कई चुनौतियों का सामना करना पड़ा। कुछ लोगों ने कहा कि लड़कियों के लिए medical field सही नहीं है। लेकिन प्रिया ने इन बातों को नजरअंदाज करके अपनी पढ़ाई पर focus किया।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              वो हमेशा class में top students में से एक रही। उसने practical training में भी बहुत मेहनत की और अपने teachers से सीखने की कोशिश की। धीरे-धीरे सबने उसकी मेहनत को recognize किया।
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              सफलता की ऊंचाई
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=600&fit=crop&q=80"
                alt="Doctor के रूप में काम करते हुए"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              आज प्रिया एक successful doctor है और एक बड़े hospital में काम करती है। उसने अपने गाँव में एक free clinic खोली है जहाँ वो गरीब लोगों का इलाज मुफ्त में करती है।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              उसके पिता अब उस पर गर्व करते हैं और कहते हैं, "हमारी बेटी ने साबित कर दिया कि अगर इरादा मजबूत हो तो कोई भी सपना सच हो सकता है।"
            </p>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              कहानी से सीख
            </h2>
            <div className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <p className="font-[var(--font-hindi)]">
                <strong>1. अपने सपनों पर विश्वास करो:</strong> अगर तुम्हें लगता है कि तुम कुछ कर सकते हो, तो तुम जरूर कर सकते हो। बस खुद पर विश्वास रखो।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>2. बाधाओं से न डरो:</strong> जीवन में बाधाएं आएंगी, लेकिन अगर तुम दृढ़ संकल्प रखो तो तुम हर बाधा को पार कर सकते हो।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>3. मेहनत कभी व्यर्थ नहीं जाती:</strong> जो मेहनत करता है, उसे एक दिन जरूर सफलता मिलती है। बस धैर्य रखो।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>4. दूसरों की मदद करो:</strong> जब तुम successful हो जाओ, तो दूसरों की मदद करना मत भूलो। यही true success है।
              </p>
              <p className="font-[var(--font-hindi)]">
                <strong>5. लिंग या जाति से कोई फर्क नहीं पड़ता:</strong> अगर तुम चाहो तो तुम कुछ भी कर सकते हो, चाहे तुम लड़का हो या लड़की।
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 font-[var(--font-hindi)]">
              निष्कर्ष
            </h2>
            <div className="mb-6 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&q=80"
                alt="सफलता और उपलब्धि"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-300 mb-4 font-[var(--font-hindi)]">
              प्रिया की कहानी हमें सिखाती है कि अगर हमारा इरादा मजबूत है और हम मेहनत करने को तैयार हैं, तो कोई भी हमें हमारे सपनों को पूरा करने से नहीं रोक सकता।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 font-[var(--font-hindi)]">
              समाज में कई बार लोग हमें बताते हैं कि हम क्या कर सकते हैं और क्या नहीं। लेकिन सच्चाई यह है कि अगर तुम चाहो तो तुम कुछ भी कर सकते हो। बस अपने सपनों पर विश्वास करो और उन्हें पूरा करने के लिए मेहनत करो।
            </p>
            <p className="text-neutral-600 dark:text-neutral-300 mt-4 font-[var(--font-hindi)]">
              याद रखो, हर successful person ने कभी न कभी संघर्ष किया है। अगर तुम भी अपने सपने पूरे करना चाहते हो, तो आज से ही शुरुआत करो। हर बड़ी यात्रा एक छोटे से कदम से शुरू होती है।
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

