export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        bg-slate-950/80
        backdrop-blur-md
        border-b
        border-slate-800
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        <h2 className="text-xl font-bold text-white">
          Niranjan Magare
        </h2>

        <ul className="flex gap-6 text-slate-300">
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}