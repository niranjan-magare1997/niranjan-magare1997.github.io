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
      "Docker",
      "AWS",
      "Google Cloud",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    title: "AI & Emerging Tech",
    skills: [
      "Ollama",
      "Vector Embeddings",
      "RAG",
      "Semantic Search",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        Technical Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-800 px-3 py-2 rounded-full"
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