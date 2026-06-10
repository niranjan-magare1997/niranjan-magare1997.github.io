const experiences = [
  {
    company: "Globant",
    role: "Software Engineer",
    duration: "May 2024 - Present",
    achievements: [
      "Engineered multi-tenant ticketing platform supporting multiple entertainment brands.",
      "Built federated GraphQL microservices using NestJS and Apollo Federation.",
      "Improved booking API performance by 35–50% using Redis distributed caching.",
      "Integrated Google Apigee, AEM CMS and downstream booking services.",
      "Built local RAG system using Ollama, vector embeddings and semantic retrieval.",
    ],
  },
  {
    company: "Birbal AI Tech (CronJ)",
    role: "Software Engineer",
    duration: "Nov 2023 - May 2024",
    achievements: [
      "Led backend development for Tejas Reporting Tool.",
      "Designed scalable REST APIs using Node.js, Express.js and Sequelize.",
      "Implemented automated cron-based data pipelines.",
    ],
  },
  {
    company: "Network Components Pvt Ltd",
    role: "Software Engineer",
    duration: "Dec 2019 - Oct 2023",
    achievements: [
      "Architected centralized IoT platform managing smart devices.",
      "Built SaaS IoT and Home Automation platforms.",
      "Implemented MQTT, REST, TCP and UDP communication layers.",
      "Mentored engineers and improved backend scalability.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white mb-16">
        Experience
      </h2>

      <div className="relative border-l border-slate-700 ml-4">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-16 ml-10"
          >
            <div
              className="
                absolute
                w-4
                h-4
                bg-blue-500
                rounded-full
                -left-2
              "
              style={{
                top: `${index * 285}px`,
              }}
            />

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-white">
                {exp.company}
              </h3>

              <p className="text-blue-400 mt-1">
                {exp.role}
              </p>

              <p className="text-slate-500 mt-1">
                {exp.duration}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.achievements.map((item) => (
                  <li
                    key={item}
                    className="text-slate-300"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}