// app/movie/layout.tsx
import React from "react";

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="movie-layout" style={{ backgroundColor: "#8a2be2" }}>
      <header>
        <h1>Ulubiony Film</h1>
        <p>Zapraszam do zapoznania się z moim ulubionym filmem!</p>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 - Moja Strona</p>
      </footer>
    </div>
  );
}
