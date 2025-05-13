import Link from "next/link";

export default function Header() {
  return (
    <header style={{ marginBottom: "2rem", padding: "1rem", backgroundColor: "#222222" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link href="/" legacyBehavior>
          <a style={{ color: "#007BFF", textDecoration: "none", fontSize: "1.2rem" }}>Hjem</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a style={{ color: "#007BFF", textDecoration: "none", fontSize: "1.2rem" }}>Om Oss</a>
        </Link>
      </nav>
    </header>
  );
}