const experiences = [
  {
    company: "Metplore (EA Client)",
    role: "Senior Full Stack Engineer",
    location: "Hyderabad",
    duration: "Aug 2026 - Present",
    achievements: [
      "Developed a TypeScript/Node.js Slack approval platform provisioned with AWS CDK to automate policy-based app reviews, human escalation, and retry-safe workflows.",
      "Implemented event-driven architecture using AWS API Gateway, Lambda, SNS/SQS, DynamoDB, EventBridge Scheduler, Systems Manager, and CloudWatch.",
      "Delivered gated dev and production deployments through GitLab CI/CD, improving release reliability and operational control.",
    ],
  },
  {
    company: "Globant",
    role: "Senior Software Engineer",
    location: "Pune",
    duration: "May 2024 - Jul 2026",
    achievements: [
      "Engineered a federated GraphQL multi-tenant ticketing platform (Qiddiya) serving SEVEN, AQUARABIA, and SIXFLAGS using NestJS, TypeScript, and Apollo Federation.",
      "Integrated AEM, identity provider (IdP) authentication, and downstream booking services via Amazon API Gateway with PostgreSQL/TypeORM on AWS EC2.",
      "Improved high-traffic booking API performance by 35–50% through Redis distributed caching, cache invalidation strategies, and GraphQL query optimization.",
      "Built a local RAG-based LLM solution using Ollama, vector embeddings, and semantic retrieval; received the Extra Mile Award for AI innovation.",
    ],
  },
  {
    company: "Birbal AI Tech (CronJ)",
    role: "Software Engineer (SDE3)",
    location: "Hyderabad",
    duration: "Nov 2023 - May 2024",
    achievements: [
      "Contributed to the Tejas Reporting Tool (NMS/EMS) by developing scalable RESTful APIs using Node.js, Express.js, Sequelize, and PostgreSQL.",
      "Implemented cron-based data ingestion workflows to collect and process monitoring data from multiple sources for reporting systems.",
    ],
  },
  {
    company: "Network Components Pvt Ltd",
    role: "Junior Software Engineer",
    location: "Pune",
    duration: "Dec 2019 - Oct 2023",
    achievements: [
      "Architected CLOUZER, a microservices-driven SaaS IoT platform using Node.js, Hapi.js, MQTT, MongoDB, Docker, and Nginx with REST, MQTT, TCP, and UDP communication.",
      "Built real-time backend systems for Wellpremier/Welltech home automation using Node.js, Hapi.js, Socket.IO, and MQTT, integrating Crestron, Lutron, Control4, and Savant.",
      "Mentored junior engineers, conducted code reviews, established engineering best practices, and influenced key architectural decisions.",
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
        {experiences.map((exp) => (
          <div key={`${exp.company}-${exp.duration}`} className="relative mb-16 ml-8 md:ml-10">
            <div className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-sky-500 shadow-[0_0_20px_rgba(56,189,248,0.45)] md:-left-[3.05rem]" />

            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                <p className="text-sm text-slate-500">{exp.location}</p>
              </div>

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