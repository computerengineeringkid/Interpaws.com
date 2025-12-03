import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-primary-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-900/20" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-primary-300/40 blur-3xl dark:bg-primary-800/20" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 dark:border-primary-800 dark:bg-primary-900/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-600"></span>
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                AI-Powered Practice Management
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Meet{" "}
              <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Interpaws
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Interpaws is an all-in-one practice management system with AI at its core.
              From intelligent staff matching to conversational booking, we handle the
              complexity so you can focus on what matters — caring for animals.
            </p>

            {/* Key Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "AI Staff Matching",
                  desc: "Pet complaints matched to staff with the right expertise using semantic AI",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  ),
                  title: "Conversational Booking",
                  desc: "Pet owners describe concerns naturally. Our AI handles the rest",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "Automated Wellness Outreach",
                  desc: "Identify overdue pets and send personalized outreach automatically",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  title: "Complete Practice Management",
                  desc: "Staff, bookings, surgeries, and medications — all in one place",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{feature.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                Start Free Trial
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                See How It Works
              </Link>
            </div>
          </div>

          {/* Right content - Conversational Booking Preview */}
          <div className="relative lg:ml-8">
            <div className="relative animate-float">
              {/* Main dashboard card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/50 dark:border-slate-700 dark:bg-slate-800 dark:shadow-slate-900/50">
                {/* Browser chrome */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-slate-100 px-3 py-1.5 dark:bg-slate-700">
                    <span className="text-xs text-slate-500 dark:text-slate-400">app.interpaws.com</span>
                  </div>
                </div>

                {/* Conversational booking preview */}
                <div className="space-y-4">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 p-4 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Interpaws Booking Assistant</p>
                      <p className="text-sm text-primary-100">AI-powered scheduling</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-3">
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-primary-500 px-4 py-2 text-sm text-white">
                        My dog has been limping after a fall yesterday
                      </div>
                    </div>
                    <div className="flex">
                      <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                        I understand - that sounds concerning. I'll match you with Dr. Sarah Chen, our orthopedic specialist. She has availability tomorrow at 10:30 AM or 2:00 PM.
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-br-md bg-primary-500 px-4 py-2 text-sm text-white">
                        10:30 works great!
                      </div>
                    </div>
                  </div>

                  {/* Confirmation */}
                  <div className="rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/30">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-green-700 dark:text-green-300">Appointment confirmed with Dr. Chen</span>
                    </div>
                    <p className="mt-1 text-xs text-green-600 dark:text-green-400">Tomorrow at 10:30 AM • Orthopedic Exam</p>
                  </div>
                </div>
              </div>

              {/* Floating AI matching card */}
              <div className="absolute -bottom-6 -left-6 animate-float-delayed rounded-xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 animate-pulse-glow">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">AI Match Found</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Orthopedic specialist • 98% match</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 rounded-lg border border-primary-200 bg-primary-50 px-3 py-2 shadow-lg dark:border-primary-800 dark:bg-primary-900/50">
                <div className="text-center">
                  <span className="text-lg font-bold text-primary-700 dark:text-primary-300">3 sec</span>
                  <p className="text-xs text-primary-600 dark:text-primary-400">Avg booking time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-20 border-t border-slate-200 pt-12 dark:border-slate-800">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
            What Veterinary Practices Are Saying
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "10,000+", label: "Appointments Booked" },
              { value: "85%", label: "Faster Booking" },
              { value: "98%", label: "Matching Accuracy" },
              { value: "4.9/5", label: "Practice Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
