// app/interests/layout.tsx
import React from "react";

export default function InterestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="interests-layout" style={{ backgroundColor: "#fffacd" }}>
      <header>
        <h1>Moje Zainteresowania</h1>
        <p>Przeczytaj o moich pasjach i zainteresowaniach.</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 - Moja Strona</p>
      </footer>
    </div>
  );
}
