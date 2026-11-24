export default function Metrics() {
  const stats = [
    {
      value: "7+",
      label: "Years Experience",
    },
    {
      value: "35-50%",
      label: "API Performance Gains",
    },
    {
      value: "4",
      label: "Companies",
    },
    {
      value: "10+",
      label: "Major Projects",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-950/90 p-8 text-center shadow-[0_0_50px_rgba(15,23,42,0.3)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40"
          >
            <h3 className="text-4xl font-bold text-sky-400">{stat.value}</h3>

            <p className="mt-2 text-slate-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}