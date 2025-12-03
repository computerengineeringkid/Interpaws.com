export default function HowItWorks() {
  const perspectives = [
    {
      title: "For Pet Owners",
      subtitle: "Booking an Appointment Has Never Been Easier",
      steps: [
        {
          number: "01",
          title: "Describe the Issue",
          description: "Tell us what's going on with your pet in your own words. No forms to fill out.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          ),
        },
        {
          number: "02",
          title: "Get Matched",
          description: "Our AI finds the best specialist for your pet's specific needs and shows available times.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          ),
        },
        {
          number: "03",
          title: "Confirm & Done",
          description: "Pick a time that works, and you're all set. We'll send reminders so you never miss an appointment.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ),
        },
      ],
      color: "primary",
    },
    {
      title: "For Veterinary Staff",
      subtitle: "Focus on Care, Not Coordination",
      steps: [
        {
          number: "01",
          title: "Set Your Expertise",
          description: "Define your specializations and skills. The AI learns what cases are best suited for you.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
        },
        {
          number: "02",
          title: "Receive Matched Cases",
          description: "See appointments that align with your expertise, reducing mismatches and improving efficiency.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          ),
        },
        {
          number: "03",
          title: "Manage Your Day",
          description: "View your schedule, access patient history, and update statuses — all in one dashboard.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          ),
        },
      ],
      color: "blue",
    },
    {
      title: "For Practice Managers",
      subtitle: "Your Practice, Under Control",
      steps: [
        {
          number: "01",
          title: "Dashboard Overview",
          description: "See today's appointments, surgeries, inventory alerts, and revenue at a glance.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          ),
        },
        {
          number: "02",
          title: "Smart Scheduling",
          description: "Let AI handle the matching while you oversee operations and handle exceptions.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ),
        },
        {
          number: "03",
          title: "Automated Growth",
          description: "Wellness outreach runs in the background, bringing clients back without manual effort.",
          icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          ),
        },
      ],
      color: "emerald",
    },
  ];

  const colorClasses = {
    primary: {
      bg: "bg-primary-500",
      bgLight: "bg-primary-100 dark:bg-primary-900/30",
      text: "text-primary-600 dark:text-primary-400",
    },
    blue: {
      bg: "bg-blue-500",
      bgLight: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
    },
    emerald: {
      bg: "bg-emerald-500",
      bgLight: "bg-emerald-100 dark:bg-emerald-900/30",
      text: "text-emerald-600 dark:text-emerald-400",
    },
  };

  return (
    <section id="how-it-works" className="relative bg-slate-50 py-24 dark:bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            How It Works
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Simple for everyone,{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              powerful for your practice
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Whether you're a pet owner, veterinary staff, or practice manager,
            Interpaws is designed to make your experience seamless.
          </p>
        </div>

        {/* Perspectives */}
        <div className="mt-20 space-y-24">
          {perspectives.map((perspective) => {
            const colors = colorClasses[perspective.color as keyof typeof colorClasses];
            return (
              <div key={perspective.title} className="relative">
                {/* Perspective header */}
                <div className="mb-12 text-center lg:text-left">
                  <span className={`inline-flex items-center rounded-full ${colors.bgLight} px-4 py-1.5 text-sm font-medium ${colors.text}`}>
                    {perspective.title}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                    {perspective.subtitle}
                  </h3>
                </div>

                {/* Steps */}
                <div className="grid gap-8 lg:grid-cols-3">
                  {perspective.steps.map((step, sIndex) => (
                    <div key={step.number} className="relative">
                      {/* Connector line */}
                      {sIndex < perspective.steps.length - 1 && (
                        <div className="absolute top-12 left-1/2 hidden h-px w-full bg-slate-200 lg:block dark:bg-slate-800" />
                      )}

                      <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                        {/* Step number */}
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${colors.bg} text-white shadow-lg`}>
                          {step.icon}
                        </div>

                        {/* Step content */}
                        <div className="mt-6">
                          <div className="flex items-center justify-center gap-2 lg:justify-start">
                            <span className={`text-sm font-bold ${colors.text}`}>
                              Step {step.number}
                            </span>
                          </div>
                          <h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                            {step.title}
                          </h4>
                          <p className="mt-3 text-slate-600 dark:text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            See It In Action
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
