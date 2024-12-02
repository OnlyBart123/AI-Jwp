// app/contact/layout.tsx
import React from "react";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="contact-layout" style={{ backgroundColor: "#98fb98" }}>
      <header>
        <h1>Kontakt</h1>
        <p>Skontaktuj się ze mną poprzez poniższy formularz.</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 - Moja Strona | Wszystkie prawa zastrzeżone</p>
      </footer>
    </div>
  );
}
