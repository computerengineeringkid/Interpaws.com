import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About Us | Interpaws - AI-Powered Veterinary Practice Management",
  description: "Learn about Interpaws and our mission to modernize veterinary care with AI-powered practice management.",
};

export default function AboutPage() {
  const values = [
    {
      title: "AI-First",
      description: "Intelligence built in, not bolted on. Every feature is designed with AI at its foundation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "User-Friendly",
      description: "Designed for real veterinary workflows. Simple enough for anyone, powerful enough for experts.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Privacy-Focused",
      description: "Your data stays yours. Bank-level encryption and full HIPAA compliance as standard.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "Continuously Improving",
      description: "The system learns and gets better. AI models improve based on real veterinary practice patterns.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

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
                About Us
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                Modernizing{" "}
                <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                  Veterinary Care
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                We believe veterinary practices deserve modern tools that work as hard as they do.
                Interpaws was built to eliminate administrative friction, improve patient matching,
                and help practices grow — all powered by AI that actually understands veterinary care.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  The Problem We Saw
                </h2>
                <p className="mt-6 text-lg text-slate-600 leading-relaxed dark:text-slate-400">
                  Traditional practice management software treats scheduling like a spreadsheet problem.
                  But matching a limping dog to the right orthopedic specialist isn't about availability —
                  it's about understanding.
                </p>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed dark:text-slate-400">
                  That's why we built Interpaws with AI at its foundation. When a pet owner says
                  "my dog has been limping after a fall," our system doesn't just find an open slot.
                  It understands the concern and matches it to the specialist with the right expertise.
                </p>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-800/50">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">Before Interpaws</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Keyword-based scheduling, manual matching, missed specialist needs</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white">With Interpaws</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Semantic AI understanding, automatic specialist matching, better outcomes</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-slate-50 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Our Approach
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
                Four principles guide everything we build at Interpaws.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built by */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4">
                Built by
              </p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Saguaro Interactive
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed dark:text-slate-400">
                Saguaro Interactive is a technology company focused on building AI-powered solutions
                that solve real problems. We believe the best software understands the domain it serves,
                and Interpaws is built from the ground up to understand veterinary care.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
                >
                  Get in Touch
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
