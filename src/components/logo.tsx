'use client';

import { FC } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import type { TDefaultData } from '../utils/types';

const LogoItem: FC<TDefaultData> = ({ url, name }) => {
  return (
    <>
      <meta itemprop="logo" content={`${url}images/template/header__logo.jpg`} />
      <span className="d-none" itemprop="name">{name}</span>
    </>
  );
}

const Logo: FC<TDefaultData> = ({ url, name }) => {
  const pathname = usePathname();

  return (
    <div className="affix__logo col-lg-3 col-md-4 mb-1 order-1" itemscope itemtype="https://schema.org/Brand">
      {pathname === '/'
        ? <>
            <meta itemprop="url" content="/" />
            <span className="header__logo"><LogoItem url={url} name={name} /></span>
          </>
        : <Link className="header__logo" href="/" itemprop="url"><LogoItem url={url} name={name} /></Link>
      }
    </div>
  );
}

export default Logo;
