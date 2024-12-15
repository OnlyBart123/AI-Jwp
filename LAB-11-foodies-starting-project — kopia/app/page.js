import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Laboratorium nr 11 - projekt startowy
        <p>
        <Link href="/community">community</Link>
        </p>
        <p>
        <Link href="/meals">meals</Link>
        </p>
        <p>
        <Link href="/meals/share">share</Link>
        </p>
        <p>
        <Link href="/meals/p1">dynamic meals</Link>
        </p>

      </h1>
    </main>
  );
}
