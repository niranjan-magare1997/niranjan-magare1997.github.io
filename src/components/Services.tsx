const services = [
  {
    title: "Backend Architecture",
    description:
      "Designing scalable microservices and distributed systems.",
  },
  {
    title: "GraphQL Federation",
    description:
      "Building federated GraphQL platforms using Apollo Federation.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploying containerized applications on AWS with EC2, Lambda, S3, and other cloud services.",
  },
];

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-32">
      <div className="mb-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
          Expertise
        </p>
        <h2 className="text-4xl font-bold text-white">What I Do</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-6 shadow-[0_0_50px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-2 hover:border-sky-400/40"
          >
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500" />
            <h3 className="text-xl font-bold text-sky-400">{service.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}