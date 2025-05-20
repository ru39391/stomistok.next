'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import type { TDefaultArr } from '../utils/types';

interface INav {
  navItems: TDefaultArr;
}

const Nav: FC<INav> = ({ navItems }) => {
  const pathname = usePathname();

  if(navItems.length === 0) {
    return '';
  }

  return (
    <nav className="nav">
      <div className="wrapper pos-rel">
        <ul className="nav__menu">
          {navItems.map(
            ({ id, menutitle, pagetitle, uri }) => <li className="nav__item" key={id}>
              <Link className={`nav__link ${pathname === `/${uri}` ? 'nav__link_current' : ''}`} href={uri}>{menutitle || pagetitle}</Link>
            </li>
          )}
          {/*
          <li className="nav__item">
            <a className="nav__link" href="produkcziya/">Продукция</a>
            <div className="nav__dropdown">
              <a className="nav__link nav__link_type_children" href="blok-kontejneryi/">Блок-контейнеры</a>
            </div>
          </li>
          */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
