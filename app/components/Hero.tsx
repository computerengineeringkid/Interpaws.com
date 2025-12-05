import Link from "next/link";
import { Database, Brain, Cpu, Network } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-b from-primary-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-900/30" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-900/20" />
        <div className="absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-primary-300/40 blur-3xl dark:bg-primary-800/20" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50/80 backdrop-blur-sm px-4 py-1.5 dark:border-primary-800 dark:bg-primary-900/50">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-600"></span>
              </span>
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                Student Innovation Project 2025
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
                Interpaws
              </span>
              :{" "}
              <span className="block mt-2">Agentic AI for Veterinary Practice Management</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              A Student Innovation Project exploring the application of{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">Vector Embeddings</span> and{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">ReAct Agents</span> to solve
              healthcare scheduling bottlenecks in veterinary practice management.
            </p>

            {/* Technical Highlights */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Database className="h-5 w-5" />,
                  title: "pgvector + Embeddings",
                  desc: "384-dimensional semantic search for staff-patient matching",
                },
                {
                  icon: <Brain className="h-5 w-5" />,
                  title: "ReAct Agent Loop",
                  desc: "Autonomous reasoning and action execution cycles",
                },
                {
                  icon: <Cpu className="h-5 w-5" />,
                  title: "Local LLM Inference",
                  desc: "Ollama-powered Llama 3 / Qwen for on-premise AI",
                },
                {
                  icon: <Network className="h-5 w-5" />,
                  title: "Full-Stack Architecture",
                  desc: "Next.js 15 + FastAPI + PostgreSQL stack",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-100/80 backdrop-blur-sm text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
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
                href="#innovation"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Read Abstract
              </Link>
              <Link
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm px-8 py-4 text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <svg className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View Architecture
              </Link>
            </div>
          </div>

          {/* Right content - Agent Reasoning Preview */}
          <div className="relative lg:ml-8">
            <div className="relative animate-float">
              {/* Main dashboard card */}
              <div className="rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl p-4 shadow-2xl shadow-slate-200/50 dark:border-slate-700/50 dark:bg-slate-800/80 dark:shadow-slate-900/50">
                {/* Browser chrome */}
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-amber-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex-1 rounded-md bg-slate-100/80 backdrop-blur-sm px-3 py-1.5 dark:bg-slate-700/80">
                    <span className="text-xs text-slate-500 dark:text-slate-400">interpaws.ai/agent-console</span>
                  </div>
                </div>

                {/* Agent Reasoning Preview */}
                <div className="space-y-3">
                  {/* Agent header */}
                  <div className="flex items-center gap-3 rounded-lg bg-linear-to-r from-primary-500 to-primary-600 p-3 text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Brain className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold">ReAct Agent Console</p>
                      <p className="text-sm text-primary-100">Live reasoning trace</p>
                    </div>
                  </div>

                  {/* User input */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-br-md bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                      My dog has been limping after a fall yesterday
                    </div>
                  </div>

                  {/* Agent reasoning steps */}
                  <div className="space-y-2 rounded-lg border border-primary-200/50 bg-primary-50/50 backdrop-blur-sm p-3 dark:border-primary-800/50 dark:bg-primary-900/30">
                    <div className="flex items-start gap-2">
                      <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                        THOUGHT
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Analyzing symptoms: limping + fall history suggests orthopedic concern. Need to query staff vector store for expertise match.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        ACTION
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                        query_staff_vector(embedding=&quot;orthopedic trauma limping&quot;, k=3)
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-green-700 dark:bg-green-900/50 dark:text-green-300">
                        RESULT
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Top match: Dr. Sarah Chen (cosine_similarity: 0.94) - Orthopedic Surgery
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="rounded bg-amber-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-amber-700 dark:bg-amber-900/50 dark:text-amber-300">
                        THOUGHT
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        High confidence match found. Now checking calendar availability for Dr. Chen...
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="rounded bg-blue-100 px-1.5 py-0.5 text-xs font-mono font-semibold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                        ACTION
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                        check_availability(staff_id=12, date_range=&quot;next_48h&quot;)
                      </p>
                    </div>
                  </div>

                  {/* Final response */}
                  <div className="rounded-lg border border-green-200/50 bg-green-50/80 backdrop-blur-sm p-3 dark:border-green-800/50 dark:bg-green-900/30">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-semibold text-green-700 dark:text-green-300">AGENT RESPONSE</span>
                    </div>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      I've matched you with Dr. Sarah Chen, our orthopedic specialist. She has slots at 10:30 AM or 2:00 PM tomorrow.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating vector similarity card */}
              <div className="absolute -bottom-6 -left-6 animate-float-delayed rounded-xl border border-slate-200/50 bg-white/90 backdrop-blur-xl p-4 shadow-lg dark:border-slate-700/50 dark:bg-slate-800/90">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-primary-500 to-primary-600 animate-pulse-glow">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Vector Match</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">384-dim • cosine: 0.94</p>
                  </div>
                </div>
              </div>

              {/* Floating LLM stats */}
              <div className="absolute -top-4 -right-4 rounded-lg border border-primary-200/50 bg-primary-50/90 backdrop-blur-xl px-3 py-2 shadow-lg dark:border-primary-800/50 dark:bg-primary-900/80">
                <div className="text-center">
                  <span className="text-lg font-bold text-primary-700 dark:text-primary-300">Llama 3</span>
                  <p className="text-xs text-primary-600 dark:text-primary-400">8B params • local</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical metrics */}
        <div className="mt-20 border-t border-slate-200/50 pt-12 dark:border-slate-800/50">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8">
            Project Technical Specifications
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "384", label: "Embedding Dimensions" },
              { value: "<200ms", label: "Vector Query Latency" },
              { value: "ReAct", label: "Agent Architecture" },
              { value: "100%", label: "Local Inference" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">{stat.value}</p>
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
