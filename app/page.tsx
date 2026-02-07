import css from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <section className={css.heroSection}>
      <div className={`container ${css.heroContainer}`}>
        <h1 className={css.heroTitle}>Find your perfect rental car</h1>
        <p className={css.heroText}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link className={css.heroLink} href='/catalog'>
          View Catalog
        </Link>
      </div>
    </section>
  );
}
