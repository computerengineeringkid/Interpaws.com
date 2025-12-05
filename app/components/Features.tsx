import { Database, Brain, Mail, Sparkles, Search, RotateCcw } from "lucide-react";

export default function Features() {
  const innovationClaims = [
    {
      id: "semantic-matching",
      title: "Semantic Staff Matching",
      subtitle: "Beyond Keyword Search",
      description:
        "Moving beyond keyword search. Utilizing pgvector and 384-dimensional embeddings to match unstructured patient complaints with veterinarian skill sets mathematically.",
      icon: <Database className="h-6 w-6" />,
      color: "from-violet-500 to-purple-600",
      metrics: [
        { label: "Embedding Model", value: "all-MiniLM-L6-v2" },
        { label: "Dimensions", value: "384" },
        { label: "Similarity", value: "Cosine" },
      ],
      codeSnippet: `-- Vector similarity search
SELECT staff.name,
  1 - (staff.skill_embedding <=> $1) AS similarity
FROM staff
ORDER BY staff.skill_embedding <=> $1
LIMIT 3;`,
      gridClass: "md:col-span-2 md:row-span-2",
    },
    {
      id: "react-paradigm",
      title: "The ReAct Paradigm",
      subtitle: "Reason + Act Agents",
      description:
        "Implementing 'Reason + Act' agents. Unlike standard chatbots, Interpaws uses a continuous execution loop to query inventory and calendars autonomously before responding.",
      icon: <Brain className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-600",
      metrics: [
        { label: "Architecture", value: "ReAct Loop" },
        { label: "LLM Backend", value: "Ollama" },
        { label: "Model", value: "Llama 3 / Qwen" },
      ],
      codeSnippet: `# ReAct Agent Loop
while not done:
    thought = llm.think(observation)
    action = llm.decide(thought)
    observation = execute(action)
    if action == "respond":
        done = True`,
      gridClass: "md:col-span-1 md:row-span-2",
    },
    {
      id: "wellness-loops",
      title: "Proactive Wellness Loops",
      subtitle: "Automated Patient Outreach",
      description:
        "Automated identification of at-risk patients via temporal SQL analysis, triggering LLM-generated, personalized outreach emails.",
      icon: <Mail className="h-6 w-6" />,
      color: "from-emerald-500 to-teal-600",
      metrics: [
        { label: "Trigger", value: "> 12 months" },
        { label: "Analysis", value: "Temporal SQL" },
        { label: "Output", value: "LLM Email" },
      ],
      codeSnippet: `-- Find overdue patients
SELECT pet.name, owner.email,
  AGE(NOW(), MAX(visit.date)) as since_last
FROM pets
JOIN visits ON pet.id = visit.pet_id
GROUP BY pet.id
HAVING AGE(NOW(), MAX(visit.date)) > '12 months';`,
      gridClass: "md:col-span-3",
    },
  ];

  const technicalHighlights = [
    {
      icon: <Search className="h-5 w-5" />,
      title: "Semantic Search",
      description: "Natural language queries matched against embedded staff profiles",
    },
    {
      icon: <RotateCcw className="h-5 w-5" />,
      title: "Autonomous Loops",
      description: "Self-correcting agent cycles until task completion",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "LLM Synthesis",
      description: "Context-aware responses generated from retrieved data",
    },
  ];

  return (
    <section id="innovation" className="relative bg-white py-24 dark:bg-slate-900">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-linear-to-r from-transparent via-primary-300 to-transparent dark:via-primary-700" />
        <div className="absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-900/20" />
        <div className="absolute bottom-1/4 -left-20 h-72 w-72 rounded-full bg-accent-100/30 blur-3xl dark:bg-accent-900/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-accent-200 bg-accent-50 px-4 py-1.5 text-sm font-medium text-accent-700 dark:border-accent-800 dark:bg-accent-900/50 dark:text-accent-300">
            Technical Innovation
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Innovation Claims &{" "}
            <span className="bg-linear-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              Technical Contributions
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Three core innovations that differentiate Interpaws from conventional practice management systems.
            Each leverages modern AI/ML techniques to solve real veterinary workflow bottlenecks.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 md:auto-rows-fr">
          {innovationClaims.map((claim) => (
            <div
              key={claim.id}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/80 backdrop-blur-xl p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-xl dark:border-slate-800/50 dark:bg-slate-800/80 dark:hover:border-primary-700 ${claim.gridClass}`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-linear-to-br ${claim.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />

              {/* Content */}
              <div className="relative h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${claim.color} text-white shadow-lg`}
                  >
                    {claim.icon}
                  </div>
                  <div className="flex gap-1">
                    {claim.metrics.slice(0, 2).map((metric) => (
                      <span
                        key={metric.label}
                        className="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300"
                      >
                        {metric.value}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title & Description */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
                    {claim.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                    {claim.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed dark:text-slate-400">
                    {claim.description}
                  </p>
                </div>

                {/* Code snippet */}
                <div className="mt-auto">
                  <div className="rounded-lg bg-slate-900 p-4 overflow-x-auto">
                    <pre className="text-xs text-slate-300 font-mono">
                      <code>{claim.codeSnippet}</code>
                    </pre>
                  </div>
                </div>

                {/* Metrics footer */}
                <div className="mt-4 flex flex-wrap gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {claim.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400">{metric.label}</p>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical highlights row */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {technicalHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="flex items-start gap-4 rounded-xl border border-slate-200/50 bg-slate-50/50 backdrop-blur-sm p-4 dark:border-slate-800/50 dark:bg-slate-800/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                {highlight.icon}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">{highlight.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Research context */}
        <div className="mt-16 rounded-2xl border border-primary-200/50 bg-primary-50/50 backdrop-blur-sm p-8 dark:border-primary-800/50 dark:bg-primary-900/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Research Foundation
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                This project builds on established research in semantic search (Reimers & Gurevych, 2019),
                ReAct prompting (Yao et al., 2022), and healthcare scheduling optimization. All AI inference
                runs locally via Ollama, ensuring data privacy and HIPAA-aligned architecture.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-700 dark:text-slate-300">100% Local LLM Inference</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-700 dark:text-slate-300">No External API Dependencies</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-slate-700 dark:text-slate-300">Privacy-First Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
