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
  }
//   ,
//   {
//     title: "Cloud & DevOps",
//     description:
//       "Deploying containerized applications on AWS and Google Cloud.",
//   },
];

export default function Services() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12">
        What I Do
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-blue-400">
              {service.title}
            </h3>

            <p className="text-slate-300 mt-4">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}