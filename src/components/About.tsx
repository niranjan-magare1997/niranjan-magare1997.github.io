export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <div className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 shadow-[0_0_70px_rgba(15,23,42,0.45)] backdrop-blur-xl md:p-10">
        <div className="mb-8 h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />

        <h2 className="mb-6 text-4xl font-bold text-white">About Me</h2>

        <div className="space-y-6 text-lg leading-8 text-slate-300">
          <p>
            I&apos;m a Senior Backend Engineer with 6.7+ years of experience
            designing scalable distributed systems, microservices
            architectures and cloud-native applications.
          </p>

          <p>
            My primary expertise lies in NestJS, TypeScript, GraphQL
            Federation, PostgreSQL, Redis, Docker and AWS. I enjoy solving
            complex backend challenges involving scalability, performance
            optimization, system design and cloud-native architectures.
          </p>

          <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5 text-slate-300 md:grid-cols-3">
            {[
              "Multi-protocol IoT",
              "Multi-tenant SaaS",
              "AI & RAG Solutions",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-center text-sm font-medium text-slate-200">
                {item}
              </div>
            ))}
          </div>

          <p>
            Currently, I work on enterprise-grade multi-tenant ticketing
            platforms, building federated GraphQL services, distributed
            caching solutions and integrations with cloud-based systems.
          </p>
        </div>
      </div>
    </section>
  );
}