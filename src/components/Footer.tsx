import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <nav className="mx-auto flex max-w-3xl gap-3 p-3">
        <Link className="text-xl hover:text-green-400" href="/privacy">
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
