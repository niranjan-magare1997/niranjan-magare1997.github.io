const achievements = [
  {
    title: "AI Initiative Award (Extra Mile Award)",
    issuer: "Globant",
    image: "/certificates/extra_mile.jpg",
  },
  {
    title: "4x Employee of the Month (Latest)",
    issuer: "Globant",
    image: "/certificates/latest_pat_on_the_back.png",
  },
  {
    title: "Typescript for Professionals",
    issuer: "Udemy",
    image: "/certificates/ts.jpg",
  },
  {
    title: "NestJS Zero to Hero",
    issuer: "Udemy",
    image: "/certificates/nestjs.jpg",
  },
];

export default function AchievementGallery() {
  return (
    <section
      id="achievements"
      className="py-32 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        Achievements & Certifications
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((item) => (
          <a
            key={item.title}
            href={item.image}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-slate-900
              rounded-xl
              overflow-hidden
              hover:-translate-y-2
              transition
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-white font-semibold">
                {item.title}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.issuer}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}