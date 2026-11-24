const highlights = [
  {
    title: "Experience",
    data: "7+ years building scalable distributed backend systems, microservices, and AWS cloud-native platforms.",
  },
  {
    title: "Core Stack",
    data: "Specialized in Node.js, NestJS, TypeScript, GraphQL, and Apollo Federation.",
  },
  {
    title: "Cloud & Architecture",
    data: "Hands-on with AWS CDK, Lambda, API Gateway, SNS/SQS, DynamoDB, EventBridge Scheduler, and Systems Manager.",
  },
  {
    title: "Performance",
    data: "Improved API performance by 35–50% through Redis caching, GraphQL optimization, and PostgreSQL data architecture.",
  },
  {
    title: "Domain Impact",
    data: "Delivered enterprise solutions across Ticketing, SaaS, IoT, and Home Automation domains.",
  },
  {
    title: "AI & Innovation",
    data: "Experience with AI/LLM integrations including RAG, vector embeddings, and semantic retrieval.",
  },
];

export default function Summary() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Snapshot
        </p>
        <h2 className="text-4xl font-bold text-white">Professional Summary</h2>
      </div>

      <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_0_70px_rgba(15,23,42,0.4)] backdrop-blur-xl">
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/40"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/20">
                  {index + 1}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400">
                    {item.title}
                  </p>
                </div>
              </div>
              <p className="text-lg leading-7 text-slate-300">{item.data}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}