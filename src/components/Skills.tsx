const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "GraphQL",
      "Apollo Federation",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    title: "Databases & Caching",
    skills: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Sequelize"],
  },
  {
    title: "Cloud (AWS)",
    skills: [
      "AWS CDK",
      "API Gateway",
      "Lambda",
      "SNS",
      "SQS",
      "DynamoDB",
      "EventBridge Scheduler",
      "Systems Manager",
    ],
  },
  {
    title: "DevOps & Architecture",
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "GitLab CI/CD",
      "Nginx",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Message Queues",
      "MQTT",
      "Multi-Tenant Architecture",
      "System Design",
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      "Ollama",
      "LangChain",
      "RAG",
      "Vector Databases",
      "Text Embeddings",
      "Semantic Search",
      "LLM Integration",
      "AI Agent Development",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Testing",
    skills: [
      "Git",
      "GitHub",
      "GitLab",
      "Postman",
      "Bruno",
      "Jest",
      "Unit Testing",
      "Integration Testing",
      "API Testing",
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
        <div className="hidden h-px max-w-24 flex-1 bg-gradient-to-r from-sky-500 to-fuchsia-500 md:block" />
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
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