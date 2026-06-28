const projects = [
    {
        title: "Qiddiya Platform",
        subtitle: "Multi-Tenant Ticketing System",
        description:
            "Designed and developed tenant-aware ticket booking platform using NestJS, Apollo Federation, PostgreSQL and Redis.",
        impact:
            "Improved booking API performance by 35–50% through Redis distributed caching and query optimization.",
        tech: [
            "NestJS",
            "Apollo Federation",
            "Redis",
            "PostgreSQL",
            "Amazon API Gateway",
            "TypeScript",
        ],
    },
    {
        title: "Local RAG Assistant",
        subtitle: "AI Knowledge Retrieval System",
        description:
            "Built a Retrieval-Augmented Generation system using Ollama, vector embeddings and semantic search pipelines to provide context-aware responses from enterprise documents.",
        impact:
            "Enabled context-aware AI responses using local document retrieval and vector embeddings.",
        tech: [
            "Ollama",
            "Embeddings",
            "Vector Database",
            "AI Agents",
        ],
    },
    {
        title: "Clouzer",
        subtitle: "SaaS IoT Cloud Platform",
        description:
            "Architected microservices-based IoT platform supporting MQTT, REST, TCP and UDP protocols for real-time device communication.",
        impact:
            "Supported real-time communication across distributed IoT devices and cloud infrastructure.",    
        tech: [
            "Node.js",
            "MongoDB",
            "MQTT",
            "Docker",
            "Microservices",
        ],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
            <div className="mb-12">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
                    Selected Work
                </p>
                <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/40"
                    >
                        <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />

                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                        <p className="mt-2 text-sky-400">{project.subtitle}</p>

                        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                        <p className="mt-4 font-medium text-emerald-400">Impact</p>

                        <p className="mt-2 text-slate-300">{project.impact}</p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1 text-sm text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}