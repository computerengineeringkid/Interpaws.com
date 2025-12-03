import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata = {
  title: "Request a Demo | Interpaws - AI-Powered Veterinary Practice Management",
  description: "Schedule a personalized demo of Interpaws. See how AI can transform your veterinary practice.",
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-linear-to-b from-primary-50 via-white to-white pt-32 pb-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/30" />
            <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
                Request a Demo
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                See Interpaws{" "}
                <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  In Action
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Schedule a personalized demo for your practice. We'll reach out within 24 hours
                to show you exactly how Interpaws can streamline your operations.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              {/* Form */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-800/50">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Demo Request Form
                </h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        placeholder="Dr. Jane Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="practice" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Practice Name *
                      </label>
                      <input
                        type="text"
                        id="practice"
                        name="practice"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        placeholder="Happy Paws Veterinary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="size" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Practice Size *
                    </label>
                    <select
                      id="size"
                      name="size"
                      required
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="">Select practice size</option>
                      <option value="1-2">1-2 veterinarians</option>
                      <option value="3-5">3-5 veterinarians</option>
                      <option value="6-10">6-10 veterinarians</option>
                      <option value="10+">10+ veterinarians</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="software" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Current Software (optional)
                    </label>
                    <input
                      type="text"
                      id="software"
                      name="software"
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                      placeholder="e.g., Paper records, AVImark, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message / Questions (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500"
                      placeholder="Tell us about your practice or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30"
                  >
                    Request Demo
                  </button>
                </form>
              </div>

              {/* What to expect */}
              <div className="lg:pt-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  What to Expect
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold dark:bg-primary-900/50 dark:text-primary-400">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Quick Response</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        We'll reach out within 24 hours to schedule a time that works for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold dark:bg-primary-900/50 dark:text-primary-400">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Personalized Demo</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        A 30-minute walkthrough tailored to your practice's specific needs and workflows.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold dark:bg-primary-900/50 dark:text-primary-400">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">Free Trial Setup</h3>
                      <p className="mt-1 text-slate-600 dark:text-slate-400">
                        Start your 14-day free trial with hands-on onboarding and data migration support.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Direct contact */}
                <div className="mt-12 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/50">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4">
                    Prefer to reach out directly?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:hello@interpaws.com"
                      className="flex items-center gap-3 text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>hello@interpaws.com</span>
                    </a>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free data migration
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                    <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    HIPAA compliant
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
