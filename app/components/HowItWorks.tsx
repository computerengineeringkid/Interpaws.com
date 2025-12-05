import { Monitor, Server, Brain, Database, ArrowRight, Cpu, Layers, Code2, GitBranch } from "lucide-react";

export default function HowItWorks() {
  const architectureLayers = [
    {
      title: "Frontend",
      subtitle: "Next.js 15 App Router & Shadcn/UI",
      icon: <Monitor className="h-6 w-6" />,
      color: "from-blue-500 to-indigo-600",
      technologies: [
        { name: "Next.js 15", detail: "App Router, Server Components" },
        { name: "React 19", detail: "Concurrent rendering" },
        { name: "Tailwind CSS 4", detail: "Utility-first styling" },
        { name: "Shadcn/UI", detail: "Accessible components" },
      ],
      description: "Modern React framework with server-side rendering, type-safe routing, and optimized bundle splitting.",
    },
    {
      title: "Backend",
      subtitle: "FastAPI, SQLAlchemy, Alembic",
      icon: <Server className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      technologies: [
        { name: "FastAPI", detail: "Async Python API" },
        { name: "SQLAlchemy 2.0", detail: "ORM with type hints" },
        { name: "Alembic", detail: "Database migrations" },
        { name: "Pydantic v2", detail: "Data validation" },
      ],
      description: "High-performance async Python backend with automatic OpenAPI docs and comprehensive data validation.",
    },
    {
      title: "AI Engine",
      subtitle: "Ollama (Llama 3/Qwen) + SentenceTransformers",
      icon: <Brain className="h-6 w-6" />,
      color: "from-violet-500 to-purple-600",
      technologies: [
        { name: "Ollama", detail: "Local LLM inference" },
        { name: "Llama 3 / Qwen", detail: "8B parameter models" },
        { name: "SentenceTransformers", detail: "all-MiniLM-L6-v2" },
        { name: "pgvector", detail: "Vector similarity search" },
      ],
      description: "Fully local AI stack ensuring data privacy. No API calls leave your infrastructure.",
    },
  ];

  const dataFlowSteps = [
    {
      step: "01",
      title: "User Input",
      description: "Natural language query from client portal",
      icon: <Monitor className="h-5 w-5" />,
      color: "bg-blue-500",
    },
    {
      step: "02",
      title: "Vector Embedding",
      description: "Text → 384-dim vector via SentenceTransformers",
      icon: <Cpu className="h-5 w-5" />,
      color: "bg-indigo-500",
    },
    {
      step: "03",
      title: "Cosine Similarity",
      description: "pgvector search against staff skill embeddings",
      icon: <Database className="h-5 w-5" />,
      color: "bg-violet-500",
    },
    {
      step: "04",
      title: "LLM Synthesis",
      description: "Ollama generates contextual response",
      icon: <Brain className="h-5 w-5" />,
      color: "bg-purple-500",
    },
    {
      step: "05",
      title: "Response",
      description: "Structured output to user interface",
      icon: <ArrowRight className="h-5 w-5" />,
      color: "bg-emerald-500",
    },
  ];

  const technicalSpecs = [
    { icon: <Layers className="h-5 w-5" />, label: "Architecture", value: "Microservices" },
    { icon: <Database className="h-5 w-5" />, label: "Database", value: "PostgreSQL + pgvector" },
    { icon: <Code2 className="h-5 w-5" />, label: "API Style", value: "REST + WebSocket" },
    { icon: <GitBranch className="h-5 w-5" />, label: "Deployment", value: "Docker Compose" },
  ];

  return (
    <section id="architecture" className="relative bg-slate-50 py-24 dark:bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl dark:bg-blue-900/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
            System Architecture
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Full-Stack{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Technical Implementation
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            A modern, production-grade architecture combining Next.js, FastAPI, and local LLM inference.
            Every component is designed for scalability, maintainability, and data privacy.
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {architectureLayers.map((layer) => (
            <div
              key={layer.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm transition-all duration-300 hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-800/80"
            >
              {/* Header */}
              <div className={`bg-linear-to-r ${layer.color} p-6 text-white`}>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{layer.title}</h3>
                    <p className="text-sm text-white/80">{layer.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-slate-600 dark:text-slate-400 mb-6">{layer.description}</p>

                {/* Technologies */}
                <div className="space-y-3">
                  {layer.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2 dark:bg-slate-900/50"
                    >
                      <span className="font-medium text-slate-900 dark:text-white">{tech.name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">{tech.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Data Flow Pipeline
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              From user query to intelligent response in five stages
            </p>
          </div>

          {/* Flow diagram */}
          <div className="relative">
            {/* Connection line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-linear-to-r from-blue-500 via-violet-500 to-emerald-500" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {dataFlowSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  {/* Step card */}
                  <div className="flex flex-col items-center text-center">
                    {/* Step indicator */}
                    <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full ${step.color} text-white shadow-lg`}>
                      {step.icon}
                    </div>

                    {/* Arrow (mobile/tablet) */}
                    {index < dataFlowSteps.length - 1 && (
                      <div className="block lg:hidden my-2 text-slate-300 dark:text-slate-600">
                        <ArrowRight className="h-5 w-5 rotate-90" />
                      </div>
                    )}

                    {/* Content */}
                    <div className="mt-4">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">STEP {step.step}</span>
                      <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Specs Bar */}
        <div className="mt-16 rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl p-6 dark:border-slate-800/50 dark:bg-slate-800/80">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSpecs.map((spec) => (
              <div key={spec.label} className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  {spec.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{spec.label}</p>
                  <p className="font-semibold text-slate-900 dark:text-white">{spec.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code architecture preview */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Backend structure */}
          <div className="rounded-2xl border border-slate-200/50 bg-slate-900 p-6 dark:border-slate-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-slate-400">backend/</span>
            </div>
            <pre className="text-xs text-slate-300 font-mono overflow-x-auto">
              <code>{`backend/
├── app/
│   ├── api/
│   │   ├── routes/
│   │   │   ├── bookings.py
│   │   │   ├── staff.py
│   │   │   └── chat.py      # ReAct Agent
│   │   └── deps.py
│   ├── core/
│   │   ├── llm.py           # Ollama client
│   │   └── embeddings.py    # SentenceTransformers
│   ├── models/              # SQLAlchemy models
│   └── services/
│       ├── vector_search.py # pgvector queries
│       └── agent.py         # ReAct loop
└── alembic/                 # Migrations`}</code>
            </pre>
          </div>

          {/* Frontend structure */}
          <div className="rounded-2xl border border-slate-200/50 bg-slate-900 p-6 dark:border-slate-700/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-slate-400">frontend/</span>
            </div>
            <pre className="text-xs text-slate-300 font-mono overflow-x-auto">
              <code>{`frontend/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── staff/
│   │   │   ├── bookings/
│   │   │   └── vector-logs/  # Embedding inspector
│   │   └── client/
│   │       ├── pets/
│   │       └── chat/         # Agent interface
│   └── components/
│       └── ui/               # Shadcn components
└── lib/
    └── api.ts                # Type-safe API client`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
