import Link from "next/link";
import { Linkedin, Mail, FileText, Database, Code2, ExternalLink } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    "Project Team": [
      { label: "Amari Bullard - Lead Engineer", href: "#", icon: null },
    ],
    Resources: [
      { label: "Project Documentation", href: "#", icon: <FileText className="h-4 w-4" /> },
      { label: "Architecture Diagram", href: "#", icon: <Database className="h-4 w-4" /> },
      { label: "API Docs", href: "#", icon: <Code2 className="h-4 w-4" /> },
    ],
    "Tech Stack": [
      { label: "Next.js 15", href: "https://nextjs.org", icon: <ExternalLink className="h-3 w-3" /> },
      { label: "FastAPI", href: "https://fastapi.tiangolo.com", icon: <ExternalLink className="h-3 w-3" /> },
      { label: "Ollama", href: "https://ollama.ai", icon: <ExternalLink className="h-3 w-3" /> },
      { label: "pgvector", href: "https://github.com/pgvector/pgvector", icon: <ExternalLink className="h-3 w-3" /> },
    ],
    "Quick Links": [
      { label: "Home", href: "#", icon: null },
      { label: "Innovation", href: "#innovation", icon: null },
      { label: "Architecture", href: "#architecture", icon: null },
      { label: "Tech Stack", href: "#deep-dive", icon: null },
      { label: "Contact", href: "#contact", icon: null },
    ],
  };

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      label: "Email",
      href: "mailto:contact@example.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <footer id="tech-stack" className="bg-slate-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Brand column */}
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary-500 to-primary-700 shadow-lg">
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6-1.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5zM6 8.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S7.38 8.5 6 8.5zM9 4C7.62 4 6.5 5.12 6.5 6.5S7.62 9 9 9s2.5-1.12 2.5-2.5S10.38 4 9 4zm6 0c-1.38 0-2.5 1.12-2.5 2.5S13.62 9 15 9s2.5-1.12 2.5-2.5S16.38 4 15 4zm-3 8c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Inter<span className="text-primary-400">paws</span>
                </span>
                <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                  SIP Showcase
                </span>
              </div>
            </Link>
            <p className="mt-4 text-slate-400 leading-relaxed">
              A Student Innovation Project exploring Agentic AI, Vector Embeddings, and modern
              full-stack architecture for veterinary practice management.
            </p>

            {/* Social links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-colors hover:bg-primary-600 hover:text-white"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Project badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-800 bg-primary-900/50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500"></span>
              </span>
              <span className="text-sm font-medium text-primary-300">
                Student Innovation Project 2025
              </span>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-white">{category}</h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        {link.icon && <span className="text-slate-500">{link.icon}</span>}
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack highlight */}
        <div className="mt-16 rounded-2xl bg-slate-800/50 p-6 sm:p-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Built with Modern Technologies
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Full-stack AI application with local inference, vector search, and modern web frameworks.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Next.js 15",
                "React 19",
                "FastAPI",
                "PostgreSQL",
                "pgvector",
                "Ollama",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-700/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Interpaws - Student Innovation Project. Educational use only.
          </p>
        </div>

        {/* Credit */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-600">
            Website by{" "}
            <span className="font-medium text-slate-400">Saguaro Interactive</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
