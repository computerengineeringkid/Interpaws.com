export default function Testimonials() {
  const testimonials = [
    {
      quote: "The AI staff matching is incredible. When clients describe symptoms, they're automatically connected with the right specialist. Our orthopedic cases now always go to our orthopedic vet.",
      author: "Dr. Sarah Chen",
      role: "Owner, Paws & Claws Veterinary",
      location: "Austin, TX",
      image: "SC",
      rating: 5,
      highlight: "Smart AI Matching",
    },
    {
      quote: "Conversational booking changed everything. Our clients just describe their pet's issue and the AI handles the rest. No more phone tag or complicated online forms.",
      author: "Dr. Michael Torres",
      role: "Lead Veterinarian, Happy Tails Animal Hospital",
      location: "Denver, CO",
      image: "MT",
      rating: 5,
      highlight: "No-shows down 85%",
    },
    {
      quote: "The automated wellness outreach brought back dozens of overdue patients in the first month. Revenue is up and our patients are healthier. It's a win-win.",
      author: "Dr. Emily Brooks",
      role: "Veterinarian, Sunrise Pet Clinic",
      location: "Seattle, WA",
      image: "EB",
      rating: 5,
      highlight: "35% more wellness visits",
    },
    {
      quote: "As a small practice, we couldn't afford a full-time receptionist. Interpaws' AI handles appointment booking and client questions 24/7. It's like having a tireless team member.",
      author: "Dr. James Wilson",
      role: "Owner, Willow Creek Vet",
      location: "Portland, OR",
      image: "JW",
      rating: 5,
      highlight: "24/7 client support",
    },
    {
      quote: "The dashboard gives us insights we never had before. We identified peak hours, optimized staffing, and can see everything at a glance. Practice management finally makes sense.",
      author: "Dr. Lisa Martinez",
      role: "Director, Metro Animal Care",
      location: "Phoenix, AZ",
      image: "LM",
      rating: 5,
      highlight: "Complete visibility",
    },
    {
      quote: "Implementation was seamless. The Interpaws team migrated all our records, trained our staff, and were available anytime we had questions. Best onboarding experience ever.",
      author: "Dr. Robert Kim",
      role: "Partner, Riverside Veterinary Group",
      location: "San Diego, CA",
      image: "RK",
      rating: 5,
      highlight: "Seamless migration",
    },
  ];

  return (
    <section id="testimonials" className="relative bg-white py-24 dark:bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-primary-50 blur-3xl dark:bg-primary-950/50" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl dark:bg-blue-950/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            Testimonials
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            What Veterinary Practices{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Join veterinary practices that have transformed their operations
            with Interpaws. Here's what they have to say.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-lg dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-primary-700"
            >
              {/* Highlight badge */}
              <div className="mb-4 inline-flex self-start rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                {testimonial.highlight}
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="flex-1 text-slate-600 leading-relaxed dark:text-slate-300">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-slate-700">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-600 text-sm font-bold text-white shadow-lg">
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Decorative quote mark */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-primary-100 dark:text-primary-900/50">
                "
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 rounded-2xl bg-linear-to-r from-primary-600 to-primary-500 p-8 shadow-xl">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10,000+", label: "Appointments Booked" },
              { value: "85%", label: "Faster Booking" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "4.9/5", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-primary-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
