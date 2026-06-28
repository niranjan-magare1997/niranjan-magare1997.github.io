import { useEffect, useState } from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";

const techStack = ["NestJS", "TypeScript", "GraphQL", "Redis", "PostgreSQL", "Docker", "AWS"];

export default function Hero() {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const fullName = "Magare";
    let currentIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const tick = () => {
      if (!isDeleting) {
        setDisplayName(fullName.slice(0, currentIndex + 1));
        currentIndex += 1;

        if (currentIndex === fullName.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(tick, 1400);
        } else {
          timeoutId = window.setTimeout(tick, 100);
        }
      } else {
        setDisplayName(fullName.slice(0, currentIndex - 1));
        currentIndex -= 1;

        if (currentIndex === 0) {
          isDeleting = false;
          timeoutId = window.setTimeout(tick, 500);
        } else {
          timeoutId = window.setTimeout(tick, 70);
        }
      }
    };

    timeoutId = window.setTimeout(tick, 450);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      <div className="absolute inset-0 -z-10 hero-ambient" aria-hidden="true">
        <div className="hero-grid absolute inset-0" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="relative max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-300 shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-sky-400" />
          Available for Backend Engineering Opportunities
        </div>

        <h1 className="mb-4 text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
          <span className="text-white">Niranjan</span>{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
            {displayName}
          </span>
          <span className="ml-1 inline-block h-[0.8em] w-[0.12em] animate-pulse bg-sky-300 align-middle" />
        </h1>

        <h2 className="mb-6 text-xl text-slate-300 sm:text-2xl md:text-3xl">
          Senior Backend Engineer | 6.7+ Years Experience
        </h2>

        <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-400">
          Designing scalable microservices, GraphQL federations, distributed
          systems and cloud-native platforms using NestJS, TypeScript,
          PostgreSQL, Redis, AWS.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-slate-300 shadow-lg shadow-slate-950/30 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://linkedin.com/in/niranjanmagare"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-white transition duration-300 hover:border-sky-400/50 hover:bg-slate-800"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="/Niranjan_SDE_CV_LATEST.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-fuchsia-600 px-5 py-3 text-white transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]"
          >
            <FaDownload />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}