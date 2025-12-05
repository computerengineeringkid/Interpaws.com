import { FileText, Play, Layers } from "lucide-react";

export default function CTA() {
  return (
    <section id="deep-dive" className="relative bg-white py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary-600 via-primary-500 to-primary-700 px-6 py-16 shadow-2xl sm:px-12 lg:px-16 lg:py-20">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl" />

            {/* Grid pattern */}
            <svg className="absolute inset-0 h-full w-full opacity-20" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeOpacity="0.3" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Layers className="h-8 w-8 text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Technical Deep Dive
            </h2>
            <p className="mt-6 text-lg leading-8 text-primary-100 max-w-2xl mx-auto">
              This project demonstrates a complete full-stack AI application with vector embeddings,
              ReAct agent architecture, and local LLM inference for veterinary practice management.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#innovation"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-primary-600 shadow-lg transition-all hover:bg-primary-50 hover:shadow-xl sm:w-auto"
              >
                <FileText className="h-5 w-5" />
                <span>Innovation Claims</span>
              </a>
              <a
                href="#architecture"
                className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 sm:w-auto"
              >
                <Play className="h-5 w-5" />
                <span>View Architecture</span>
              </a>
            </div>

            {/* What you'll find */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: <Play className="h-5 w-5" />,
                  title: "ReAct Agent",
                  description: "Reason + Act loop",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  ),
                  title: "Vector Search",
                  description: "pgvector + embeddings",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  ),
                  title: "Full-Stack",
                  description: "Next.js + FastAPI",
                },
                {
                  icon: (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  ),
                  title: "Local LLM",
                  description: "Ollama inference",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-4 py-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-white">{feature.title}</span>
                  <span className="text-sm text-primary-100">{feature.description}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-10 rounded-xl bg-white/10 backdrop-blur-sm p-4">
              <p className="text-sm text-primary-100">
                <span className="font-semibold text-white">About this showcase:</span>{" "}
                This site demonstrates the project&apos;s technical concepts and architecture.
                The full system includes local Ollama inference, PostgreSQL with pgvector, and a FastAPI backend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
