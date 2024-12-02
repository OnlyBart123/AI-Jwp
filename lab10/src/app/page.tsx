// src/app/lab9/page.tsx
import React from 'react';
import Navigation from './components/Navigation';  // Importujemy komponent nawigacji
import './Lab9Page.css'; // Style specyficzne dla tej strony

const Lab9Page = () => {
  return (
    <div className="lab9-container">
      {/* Link powrotu do strony głównej */}
       {/* Komponent nawigacji */}

      <div className="lab9-content">
        <h1 className="lab9-header">Witamy na stronie Lab 9</h1>
        <Navigation />
        {/* Treść strony */}
      </div>
    </div>
  );
};

export default Lab9Page;
