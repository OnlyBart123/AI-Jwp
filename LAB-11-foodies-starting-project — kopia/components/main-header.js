import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <img src={logoImg.src} alt="A plate with food on it" width="300px" height="300px" />
        NextLevel food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals" className={styles.link}>Browse Meals</Link>
          </li>
          <li>
            <Link href="/meals/share" className={styles.link}>Shared Meals</Link>
          </li>
          <li>
            <Link href="/meals/p1" className={styles.link}>Dynamic Meals</Link>
          </li>
          <li>
            <Link href="/community" className={styles.link}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
