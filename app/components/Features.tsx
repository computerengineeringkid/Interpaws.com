import Link from "next/link";

export default function Features() {
  const aiFeatures = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Staff Matching",
      subtitle: "The Right Specialist, Every Time",
      description: "When a pet owner says 'my dog has been limping after a fall,' Interpaws understands this needs orthopedic expertise — not just any available vet. Our semantic AI analyzes the concern and matches it to staff skills, ensuring better outcomes and more efficient scheduling.",
      points: [
        "Semantic understanding, not keyword matching",
        "Staff define their specializations in plain language",
        "Continuous improvement through AI learning",
      ],
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Conversational Booking Assistant",
      subtitle: "Book Appointments Through Conversation",
      description: "No more clunky forms. Pet owners simply describe what's going on with their pet, and our AI assistant guides them to the perfect appointment. It remembers context, understands preferences, and handles complex requests naturally.",
      points: [
        "Natural language understanding",
        "Multi-turn conversation memory",
        "Handles rescheduling and cancellations",
        "Detects emergencies and prioritizes accordingly",
      ],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Automated Wellness Outreach",
      subtitle: "Never Miss a Follow-Up Again",
      description: "Interpaws automatically identifies pets who haven't visited in over 12 months and sends personalized, AI-written emails encouraging them to schedule a wellness check. More preventive care means healthier pets and increased revenue.",
      points: [
        "Automatic identification of overdue pets",
        "AI-generated personalized emails",
        "Matches outreach to client preferences",
        "Runs automatically on your schedule",
      ],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  const practiceFeatures = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Staff Management",
      features: ["Add and manage veterinarians and technicians", "Define skills and specializations", "Role-based assignments"],
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Booking Management",
      features: ["Full appointment lifecycle", "Conflict detection", "Status tracking & calendar views"],
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Surgery Scheduling",
      features: ["Schedule and track surgical procedures", "Pre-surgery inventory verification", "Voice notes for hands-free documentation"],
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Medication Inventory",
      features: ["Track stock levels in real-time", "Low-stock alerts on dashboard", "Link medications to surgeries"],
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Client Portal",
      features: ["Multi-pet profile management", "Self-service booking", "View appointment history"],
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Secure & Compliant",
      features: ["Bank-level encryption", "Automatic backups", "Full HIPAA compliance"],
    },
  ];

  return (
    <section id="features" className="relative bg-white py-24 dark:bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-linear-to-r from-transparent via-primary-300 to-transparent dark:via-primary-700" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            AI-Powered Features
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Intelligence built in,{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              not bolted on
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Interpaws was built with AI at its foundation. Every feature is designed
            to understand veterinary care and make your practice more efficient.
          </p>
        </div>

        {/* AI Features - Large cards */}
        <div className="mt-16 space-y-12">
          {aiFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${feature.color} text-white shadow-lg mb-4`}
                >
                  {feature.icon}
                </div>
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                  {feature.title}
                </p>
                <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                  {feature.subtitle}
                </h3>
                <p className="mt-4 text-lg text-slate-600 leading-relaxed dark:text-slate-400">
                  {feature.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <svg className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-600 dark:text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1">
                <div className="relative h-80 rounded-2xl border border-slate-200 bg-linear-to-br from-slate-50 to-white p-8 shadow-lg dark:border-slate-800 dark:from-slate-900 dark:to-slate-800/50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`h-32 w-32 rounded-full bg-linear-to-br ${feature.color} opacity-20 blur-2xl`} />
                  </div>
                  <div className="relative h-full flex items-center justify-center">
                    <div className={`h-20 w-20 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center shadow-xl`}>
                      <div className="text-white scale-150">{feature.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Management Features */}
        <div className="mt-32">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
              Practice Management
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Everything else you need,{" "}
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                all in one place
              </span>
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-primary-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <svg className="h-4 w-4 flex-shrink-0 text-primary-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            See all features in detail
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
