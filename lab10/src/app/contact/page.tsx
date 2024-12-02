// src/app/lab9/contact/page.tsx
import React from 'react';
import Link from 'next/link';  // Importujemy Link z Next.js
import './ContactPage.css';  // Plik CSS z stylami dla strony kontaktowej
import EmailInput from '../components/EmailInput';  // Importujemy nasz nowy komponent EmailInput
import BackButton from '../components/BackButton';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* Link powrotu na stronę Lab 9 */}
      <BackButton href="/" />

      <div className="contact-form-container">
        <h1 className="contact-header">Kontakt</h1>
        <form className="contact-form">
          {/* Używamy komponentu EmailInput */}
          <EmailInput
            id="email"
            name="email"
            placeholder="Wpisz swój email"
          />

          <div className="form-group">
            <button type="submit" className="submit-btn">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
