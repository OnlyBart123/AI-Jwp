// app/about/layout.tsx
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="about-layout" style={{ backgroundColor: "#add8e6" }}>
      <header>
        <h1>O Mnie</h1>
        <p>Witaj na stronie o mnie!</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 - Moja Strona</p>
      </footer>
    </div>
  );
}
