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
            "GCP",
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
        <section
            id="projects"
            className="py-32 px-6 max-w-6xl mx-auto"
        >
            <h2 className="text-4xl font-bold text-white mb-12">
                Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    
                    <div
                        key={project.title}
                        className="
                            bg-slate-900
                            rounded-xl
                            p-6
                            hover:-translate-y-2
                            transition
                            "
                    >
                        <h3 className="text-2xl font-bold text-white">
                            {project.title}
                        </h3>

                        <p className="text-blue-400 mt-2">
                            {project.subtitle}
                        </p>

                        <p className="text-slate-300 mt-4 leading-7">
                            {project.description}
                        </p>

                        <p className="mt-4 text-green-400 font-medium">
                        Impact
                        </p>

                        <p className="text-slate-300 mt-2">
                            {project.impact}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="
                                        px-3
                                        py-1
                                        bg-slate-800
                                        rounded-full
                                        text-sm
                                        text-slate-300
                                    "
                                >
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