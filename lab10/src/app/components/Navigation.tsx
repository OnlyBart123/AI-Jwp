// components/Navigation.tsx
import React from "react";
import Link from "next/link";


const Navigation: React.FC = () => {
  return (
    <nav className="lab9-nav">
      <ul className="lab9-list">
        <li><Link href="/about" className="lab9-link">O mnie</Link></li>
        <li><Link href="/interests" className="lab9-link">Moje zainteresowania</Link></li>
        <li><Link href="/movie" className="lab9-link">Ulubiony film</Link></li>
        <li><Link href="/contact" className="lab9-link">Kontakt</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
