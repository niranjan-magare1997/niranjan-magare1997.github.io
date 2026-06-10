import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        <p className="text-blue-400 font-medium mb-4">
          Available for Backend Engineering Opportunities
        </p>

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          Niranjan Magare
        </h1>

        <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
          Senior Backend Engineer | 6+ Years Experience
        </h2>

        <p className="text-lg text-slate-400 leading-8 max-w-3xl mx-auto">
          Designing scalable microservices, GraphQL federations,
          distributed systems and cloud-native platforms using
          NestJS, TypeScript, PostgreSQL, Redis.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            "NestJS",
            "TypeScript",
            "GraphQL",
            "Redis",
            "PostgreSQL",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="https://github.com/niranjan-magare1997"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-lg"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/niranjanmagare"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 border text-white border-slate-700 rounded-lg"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="/Niranjan_Magare_Resume.pdf"
            target="_blank"
            className="
              flex items-center gap-2
              px-5 py-3
              bg-slate-800
              hover:bg-slate-700
              rounded-lg
              transition
            "
          >
          <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}