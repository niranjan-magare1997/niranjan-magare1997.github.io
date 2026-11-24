import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        mx-auto
        max-w-5xl
        px-6
        py-32
        text-center
      "
    >
      <h2 className="
          mb-6
          text-4xl
          font-bold
          text-white
        "
      >
        Let&apos;s Connect
      </h2>

      <p className="
          mb-10
          text-slate-400
        "
      >
        Open to senior full stack, backend, platform engineering, and AWS
        cloud-native opportunities.
      </p>

      <div className="
          flex
          flex-wrap
          justify-center
          gap-6
          text-3xl
          text-white
        "
      >
        <a
          href="mailto:niranjan.magare@gmail.com"
          className="
            transition
            hover:text-sky-400
          "
          aria-label="Email Niranjan Magare"
        >
          <FaEnvelope />
        </a>

        <a
          href="tel:+918149574425"
          className="
            transition
            hover:text-sky-400
          "
          aria-label="Call Niranjan Magare"
        >
          <FaPhoneAlt />
        </a>

        <a
          href="https://linkedin.com/in/niranjanmagare"
          target="_blank"
          rel="noreferrer"
          className="
            transition
            hover:text-sky-400
          "
          aria-label="LinkedIn profile"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="
          mt-8
          space-y-2
          text-lg
          text-slate-300
        "
      >
        <p className="
            font-medium
            text-blue-400
          "
        >
          niranjan.magare@gmail.com
        </p>

        <p>+91 8149574425</p>

        <p className="
            flex
            items-center
            justify-center
            gap-2
            text-slate-400
          "
        >
          <FaMapMarkerAlt className="text-sky-400" />
          Hyderabad, India
        </p>
      </div>
    </section>
  );
}