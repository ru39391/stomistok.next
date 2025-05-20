'use client';

import { FC } from 'react';
import Link from 'next/link';
import type { TDefaultData, TNav } from '../utils/types';

interface INav {
  navItems: TNav;
}

const NavPicture: FC<TDefaultData> = ({ alt, classMod, src, thumb }) => {
  return (
    <picture className={`header__menu-picture header__menu-picture__${classMod}`}>
      <source type="image/webp" srcset={thumb} />
      <source type="image/jpeg" srcset={src} />
      <img className="img-fluid" src={src} alt={alt} />
    </picture>
  );
}

const Nav: FC<INav> = ({ navItems }) => {
  if (navItems.length === 0) {
    return '';
  }

  return (
    <nav className="header__menu offset-md-3 offset-lg-0" itemscope="" itemtype="https://schema.org/SiteNavigationElement">
      <div className="container d-md-flex flex-wrap">
        <div className="affix__menu col-12 d-lg-flex flex-wrap px-0">
        {navItems.map(
          ({ id, menutitle, pagetitle, uri, pics: [defaultPic, hoverPic] }) => <div key={id} className="header__menu-item col-lg px-0">
            <Link className="header__menu-link header__menu-link__category" href={uri} itemprop="url">
              <NavPicture alt={menutitle || pagetitle} classMod='default' src={defaultPic.src} thumb={defaultPic.thumb} />
              {hoverPic && <NavPicture alt={menutitle || pagetitle} classMod='hover' src={hoverPic.src} thumb={hoverPic.thumb} />}
              <span className="header__menu-title" itemprop="name">{menutitle || pagetitle}</span>
            </Link>
            <button className="header__menu-btn" type="button">{menutitle || pagetitle}</button>
            {id === 2 && <div className="header__menu-dropdown flex-wrap">
              <div className="col-8 d-none d-md-block">
                <form className="header__search" action="#" method="get">
                  <input className="header__search-input" type="text" name="query" value="" placeholder="Поиск по сайту" />
                  <input className="header__search-btn" type="submit" value="" />
                </form>
              </div>
              {/* TODO: разместить список услуг */}
            </div>}
          </div>
        )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
