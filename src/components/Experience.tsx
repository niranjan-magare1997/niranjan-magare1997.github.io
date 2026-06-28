const experiences = [
  {
    company: "Globant",
    role: "Senior Software Engineer",
    duration: "May 2024 - Present",
    achievements: [
      "Engineered federated GraphQL multi-tenant ticketing platform (Qiddiya) supporting SEVEN, AQUARABIA, and SIXFLAGS brands.",
      "Built NestJS microservices with Apollo Federation, integrated AEM CMS, IdP authentication and downstream services via Amazon API Gateway.",
      "Improved high-traffic booking API performance by 35–50% using Redis distributed caching on Amazon EC2.",
      "Built local RAG system using Ollama, vector embeddings and semantic retrieval. Received Extra Mile Award for AI innovation.",
    ],
  },
  {
    company: "Birbal AI Tech (CronJ)",
    role: "Software Engineer (SDE3)",
    duration: "Nov 2023 - May 2024",
    achievements: [
      "Led backend development for Tejas Reporting Tool.",
      "Designed scalable REST APIs using Node.js, Express.js and Sequelize.",
      "Implemented automated cron-based data pipelines.",
    ],
  },
  {
    company: "Network Components Pvt Ltd",
    role: "Junior Software Engineer",
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
    <section id="experience" className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Journey
        </p>
        <h2 className="text-4xl font-bold text-white">Experience</h2>
      </div>

      <div className="relative ml-4 border-l border-slate-700">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-8 md:ml-10">
            <div className="absolute -left-[0.58rem] h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.45)]" style={{ top: `${index * 300}px` }} />

            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.3)]">
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>

              <p className="mt-1 text-sky-400">{exp.role}</p>

              <p className="mt-1 text-sm text-slate-500">{exp.duration}</p>

              <ul className="mt-4 space-y-3">
                {exp.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-300">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
                    <span>{item}</span>
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