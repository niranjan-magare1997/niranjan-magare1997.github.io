export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        About Me
      </h2>

      <div className="space-y-6 text-slate-300 text-lg leading-8">
        <p>
          I'm a Senior Backend Engineer with 6+ years of experience
          designing scalable distributed systems, microservices
          architectures and cloud-native applications.
        </p>

        <p>
          My primary expertise lies in NestJS, TypeScript,
          GraphQL Federation, PostgreSQL, Redis and Docker.
          I enjoy solving complex backend challenges involving
          scalability, performance optimization and system design.
        </p>

        <p>
          Currently, I work on enterprise-grade multi-tenant
          ticketing platforms, building federated GraphQL services,
          distributed caching solutions and integrations with
          cloud-based systems.
        </p>
      </div>
    </section>
  );
}