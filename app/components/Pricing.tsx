"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "For small practices getting started with modern practice management.",
      monthlyPrice: 199,
      annualPrice: 169,
      features: [
        "Up to 3 practitioners",
        "1,000 patient records",
        "AI staff matching",
        "Conversational booking",
        "Basic reporting",
        "Email support",
        "Client portal",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      description: "For growing practices that need all AI features and unlimited capacity.",
      monthlyPrice: 399,
      annualPrice: 339,
      features: [
        "Up to 10 practitioners",
        "Unlimited patient records",
        "All AI features",
        "Automated wellness outreach",
        "Advanced analytics",
        "Surgery scheduling",
        "Medication inventory",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      description: "For large clinics and hospitals requiring custom solutions.",
      monthlyPrice: null,
      annualPrice: null,
      features: [
        "Unlimited practitioners",
        "Unlimited locations",
        "Custom AI training",
        "White-label options",
        "Dedicated account manager",
        "SLA guarantee",
        "On-premise deployment",
        "24/7 phone support",
        "Custom integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "How does billing work?",
      answer: "We bill monthly or annually based on your preference. Annual plans save you 15%. You can upgrade, downgrade, or cancel anytime.",
    },
    {
      question: "Can I upgrade or downgrade?",
      answer: "Yes, you can change your plan at any time. When upgrading, you'll be prorated for the remainder of your billing period. Downgrades take effect at the next billing cycle.",
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. All plans include free onboarding, data migration from your existing system, and staff training.",
    },
    {
      question: "What support is included?",
      answer: "All plans include email support. Professional plans get priority support with faster response times. Enterprise plans include 24/7 phone support and a dedicated account manager.",
    },
  ];

  return (
    <section id="pricing" className="relative bg-slate-50 py-24 dark:bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            Pricing
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Simple, transparent{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Choose the plan that fits your practice. All plans include a 14-day free trial
            with no credit card required.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative h-7 w-14 rounded-full transition-colors ${
              isAnnual ? "bg-primary-600" : "bg-slate-300 dark:bg-slate-600"
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                isAnnual ? "translate-x-8" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>
            Annual
          </span>
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
            Save 15%
          </span>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary-500 bg-white shadow-xl shadow-primary-100/50 dark:border-primary-500 dark:bg-slate-800 dark:shadow-primary-900/20"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-800/50"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-linear-to-r from-primary-600 to-primary-500 px-4 py-1.5 text-sm font-semibold text-white shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">/month</span>
                  </div>
                ) : (
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">
                    Custom
                  </div>
                )}
                {plan.monthlyPrice !== null && isAnnual && (
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Billed annually (${(plan.annualPrice ?? 0) * 12}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary-600 dark:text-primary-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`block w-full rounded-full py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:bg-primary-700 hover:shadow-xl"
                    : "border border-slate-300 text-slate-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 dark:border-slate-600 dark:text-slate-300 dark:hover:border-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-300"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            All plans include free onboarding, data migration, and training.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-800/50">
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
