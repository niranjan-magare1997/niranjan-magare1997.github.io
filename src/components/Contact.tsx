import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
        px-6
        text-center
        max-w-5xl
        mx-auto
      "
    >
      <h2 className="text-4xl text-white font-bold mb-6">
        Let's Connect
      </h2>

      <p className="text-slate-400 mb-10">
        Open to backend engineering,
        platform engineering and cloud-native opportunities.
      </p>

      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="mailto:niranjan.magare@gmail.com"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/niranjan-magare1997"
          target="_blank"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/niranjanmagare"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}