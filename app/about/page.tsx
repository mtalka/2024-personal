import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-96 flex flex-col gap-4">
      <header className="relative w-full flex justify-center">
        <h2 className="text-xl z-10 font-bold ">Briefly about me</h2>
        <div className="absolute z-0 rotate-6 translate-y-2 w-24 h-4 bg-gradient-to-r from-sky-200 to-cyan-200"></div>
      </header>
      <div className="flex flex-col gap-4 font-light text-justify">
        <p>
          Hello friend, welcome to my humble website. I am Markus Talka, a
          software developer and software industry professional,
          residing in Helsinki, Finland.
        </p>
        <p>
          On this page, you can find my resumé and contact information. Feel
          free to be in touch.
        </p>
      </div>
      <header className="mt-4 lg:mt-6 relative w-full flex justify-center">
        <h2 className="text-xl z-10 font-bold ">Socials</h2>
        <div className="absolute z-0 rotate-6 translate-y-2 w-24 h-4 bg-gradient-to-r from-rose-200 to-teal-200"></div>
      </header>
      <div className="text-center">
        <ul>
          <li>
            <Link
              target="_blank"
              href="
            https://www.linkedin.com/in/markustalka/
          "
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="
            https://instagram.com/mtalka/
          "
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="
            https://threads.net/mtalka/
          "
            >
              Threads
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              href="
            https://github.com/mtalka/
          "
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
