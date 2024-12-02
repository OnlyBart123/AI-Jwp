// components/BackButton.tsx
import React from 'react';
import Link from 'next/link'; // Importujemy Link z Next.js

interface BackButtonProps {
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ href }) => {
  return (
    <Link href={href} className="back-to-lab9">
      &#8592; Powrót do Lab 9
    </Link>
  );
};

export default BackButton;
