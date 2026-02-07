'use client';

import css from './Header.module.css';
import Link from 'next/link';
import { Icon } from '../Icon/Icon';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={`container ${css.headerContainer}`}>
        <Link href='/'>
          <Icon id='icon-logo' className={css.logo} />
        </Link>
        <nav>
          <ul className={css.navList}>
            <li>
              <Link
                className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
                href='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${css.navLink} ${pathname === '/catalog' ? css.active : ''}`}
                href='/catalog'
              >
                Catalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
