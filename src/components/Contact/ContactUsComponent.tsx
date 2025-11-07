"use client";
import { useState } from "react";
import Link from "next/link";

const contactInfo = [
  {
    icon: "📧",
    title: "Email Us",
    description: "Send us an email anytime",
    value: "contact@itsindianguy.in",
    href: "mailto:contact@itsindianguy.in",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "💬",
    title: "Live Chat",
    description: "We're available 24/7",
    value: "Start Chat",
    href: "#",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: "📱",
    title: "Social Media",
    description: "Follow us on socials",
    value: "@itsindianguy",
    href: "#",
    color: "from-purple-500 to-pink-500",
  },
];

const faqs = [
  {
    question: "How quickly do you respond?",
    answer: "We typically respond within 24 hours on business days.",
  },
  {
    question: "Can I request a tutorial topic?",
    answer: "Absolutely! We love hearing from our community about topics you'd like to learn.",
  },
  {
    question: "Do you offer consulting services?",
    answer: "Yes, we offer consulting for web development projects. Contact us for more details.",
  },
];

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-blue-50/30 to-purple-50/20 dark:from-neutral-900 dark:via-blue-950/20 dark:to-purple-950/10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50/30 dark:from-neutral-800 dark:to-blue-950/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                We&apos;re Here to Help
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-neutral-800 dark:text-neutral-100">Get in </span>
              <span className="block mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Touch With Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto">
              Have questions about our tutorials? Need help with your project? Or just want to say hi? We&apos;d love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-xl transition-all hover:scale-105 border border-neutral-200 dark:border-neutral-700"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 text-center">
                  {info.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2 text-center">
                  {info.description}
                </p>
                <p className={`text-center font-semibold bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}>
                  {info.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Form */}
              <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-700">
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <p className="font-semibold text-green-800 dark:text-green-200">
                          Message Sent Successfully!
                        </p>
                        <p className="text-sm text-green-600 dark:text-green-400">
                          We&apos;ll get back to you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 focus:border-blue-500 dark:focus:border-blue-400 outline-none resize-none transition-colors"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded-xl transition-all hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* FAQ & Additional Info */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="pb-4 border-b border-neutral-200 dark:border-neutral-700 last:border-0">
                        <h4 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                          {faq.question}
                        </h4>
                        <p className="text-neutral-600 dark:text-neutral-400">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl shadow-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Looking for Immediate Help?
                  </h3>
                  <p className="mb-6 text-blue-50">
                    Check out our comprehensive documentation and tutorial library for instant answers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/tutorials"
                      className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105 text-center"
                    >
                      Browse Tutorials
                    </Link>
                    <Link
                      href="/interview-qa"
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-xl font-semibold hover:bg-white/30 transition-all text-center"
                    >
                      Interview Q&A
                    </Link>
                  </div>
                </div>

                <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-xl p-8 border border-neutral-200 dark:border-neutral-700">
                  <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-3 text-neutral-600 dark:text-neutral-400">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🕐</span>
                      <div>
                        <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                          Monday - Friday
                        </p>
                        <p className="text-sm">9:00 AM - 6:00 PM IST</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌙</span>
                      <div>
                        <p className="font-semibold text-neutral-800 dark:text-neutral-100">
                          Weekend Support
                        </p>
                        <p className="text-sm">Limited availability</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Prefer Email?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
              Drop us a line directly at{" "}
              <a
                href="mailto:contact@itsindianguy.in"
                className="font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent hover:underline"
              >
                contact@itsindianguy.in
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUsComponent; 