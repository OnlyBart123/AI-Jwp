import React from 'react';
import TeaSet from '../zad1'; // Zakładając, że zad1.js znajduje się w src
import TeaSetPop from'../zad1pop';
import UserInteraction from '../zad2';
import './Page.css';  // Importujemy zewnętrzny plik CSS

const Page = () => {
  return (
    <div className="page-container">
      <h1 className="header">Pierw niepoprawnie:</h1>
      <h3 className="subheader">Welcome to the Tea Set!</h3>
      <React.StrictMode>
        <TeaSet />
      </React.StrictMode>
      
      <h1 className="header">Teraz poprawnie:</h1>
      <h3 className="subheader">Welcome to the Tea Set!</h3>
      <React.StrictMode>
        <TeaSetPop/>
      </React.StrictMode>
      
      <h1 className="header">Zadanie 2:</h1>
      <UserInteraction />
    </div>
  );
};

export default Page;
