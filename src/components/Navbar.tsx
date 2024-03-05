import Link from "next/link";
import AIChatButton from "./AIChatButton";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-3 px-3 py-4">
        <nav className="space-x-4 font-medium ">
          <Link className="text-xl hover:text-green-400" href="/">
            Home
          </Link>
          <Link className="text-xl hover:text-green-400" href="/about">
            About me
          </Link>
          <Link className=" text-xl hover:text-green-400" href="/work">
            Work Experience
          </Link>
          <Link className="text-xl hover:text-green-400" href="/social">
            Social Media
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <AIChatButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
