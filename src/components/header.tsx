import { FC } from 'react';
import Link from 'next/link';
import { fetchHeaderData } from '../api';
import type { TDefaultData, TDefaultArr } from '../utils/types';

import Nav from './nav';

const Logo: FC<TDefaultData> = ({ title, subtitle }) => {
  return (
    <div className="logo flex-grow-1 mb-3 mb-md-0">
      <Link className="d-flex flex-column" href="/">
        <span className="logo__title logo__title_fs_lg font-weight-bold text-nowrap color-brand">{title}</span>
        <span className="logo__title">{subtitle}</span>
      </Link>
    </div>
  );
}

const Header = async () => {
  const { address: addressData, nav, phones, site } = await fetchHeaderData();

  const navItems = nav ? [...nav as TDefaultArr] : [] as TDefaultArr;
  const { address, city, name, mainPhone, url } = {
    url: site ? { ...site as TDefaultData }.url : '',
    name: site ? { ...site as TDefaultData }.name : '',
    address: addressData ? { ...addressData as TDefaultData }.address : '',
    city: addressData ? { ...addressData as TDefaultData }.city : '',
    mainPhone: phones ? { ...phones as TDefaultData }.main : ''
  };
  const siteNameValues = name ? name.split(' ') : [];

  return (
    <>
      <header className="header">
        <div className="wrapper d-flex flex-column flex-md-row flex-md-wrap align-items-center justify-content-between">
          {siteNameValues.length > 0
            ? <Logo url={url} title={`${siteNameValues[0]} ${siteNameValues[1]}`} subtitle={siteNameValues[siteNameValues.length - 1]} />
            : <Logo url={url} title={name} subtitle="" />
          }
          <div className="contacts d-flex flex-wrap align-items-center justify-content-sm-between px-0">
            <div className="contacts__item mb-2 mb-lg-0">
              <span className="d-flex flex-column">
                <a className="contacts__title contacts__title_fs_sm font-weight-bold text-nowrap mb-1" href={`tel:${mainPhone}`}>{mainPhone}</a>
                <a className="contacts__subtitle d-flex flex-column d-sm-block" href="#">
                  <span className="text-nowrap">{city}, </span><span className="text-nowrap">{address}</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
      <Nav navItems={navItems} />
    </>
  );
}

export default Header;
