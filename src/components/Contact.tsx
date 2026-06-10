import {
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

      <div className="flex justify-center gap-6 text-3xl text-white">
        <a
          href="mailto:niranjan.magare@gmail.com"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://linkedin.com/in/niranjanmagare"
          target="_blank"
          className="text-white"
        >
          <FaLinkedin />
        </a>
      </div>
      <br/>
      <p className="text-blue-400 font-medium mb-10 text-2xl">
        niranjan.magare@gmail.com
      </p>
    </section>
  );
}