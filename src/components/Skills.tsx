const skillCategories = [
  {
    title: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "Express.js",
      "Hapi.js",
      "GraphQL",
      "Apollo Federation",
      "REST APIs",
      "Microservices",
      "Amazon API Gateway",
    ],
  },
  {
    title: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "SQL",
    ],
  },
  {
    title: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TypeORM",
      "Sequelize",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "S3",
      "EC2",
      "CloudFront",
      "Lambda",
      "SNS",
      "SQS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Nginx",
      "Kafka",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      "Ollama",
      "LangChain",
      "RAG",
      "Vector Embeddings",
      "Semantic Search",
      "LLM Integration",
      "AI Agent Development",
      "Prompt Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-12 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            Toolbox
          </p>
          <h2 className="text-4xl font-bold text-white">Technical Skills</h2>
        </div>
        <div className="hidden h-px flex-1 max-w-24 bg-gradient-to-r from-sky-500 to-fuchsia-500 md:block" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.35)]"
          >
            <h3 className="mb-4 text-2xl font-semibold text-sky-400">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-2 text-sm text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}