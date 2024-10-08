import Link from "next/link";

export default function Socials() {
  return (
    <div>
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
  );
}
