export default function Metrics() {
  const stats = [
    {
      value: "6+",
      label: "Years Experience",
    },
    {
      value: "35-50%",
      label: "Performance Gains",
    },
    {
      value: "3",
      label: "Companies",
    },
    {
      value: "10+",
      label: "Major Projects",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-slate-900 p-8 rounded-xl text-center"
          >
            <h3 className="text-4xl font-bold text-blue-400">
              {stat.value}
            </h3>

            <p className="text-slate-400 mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}