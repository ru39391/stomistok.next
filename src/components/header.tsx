import Link from 'next/link';
import { fetchHeaderData } from '../api';
import { helpers } from '../utils';
import type { TDefaultData, TDefaultArr } from '../utils/types';

import Logo from './logo';
import Nav from './nav';

const Header = async () => {
  const { setPhoneValue } = helpers;
  const { address: addressData, nav, phones, site } = await fetchHeaderData();

  const handleHeaderValue = (
    data: TDefaultData | undefined, counter: number
  ): string[] => data ? Object.values({ ...data }) : [...Array(counter)].map(() => '');

  const navItems = nav ? [...nav as TDefaultArr] : [] as TDefaultArr;
  const [city, address] = handleHeaderValue(addressData as TDefaultData, 2);
  const [url, name] = handleHeaderValue(site as TDefaultData, 2);
  const [mainPhone, extraPhone, mobilePhone] = handleHeaderValue(phones as TDefaultData, 3);

  return (
    <>
      <div className="top d-md-none d-flex flex-wrap align-items-center">
        <div className="col-7 pr-0">
          <button className="top__btn top__btn_icon-menu mr-1" type="button"></button>
          {/* // TODO: перенести координаты в системные настройки */}
          <a className="top__btn top__btn_icon-placemark mr-1" href="https://maps.yandex.ru/?text=55.730218,36.857597" target="_blank"></a>
          <a className="top__btn top__btn_icon-phone" href={`tel:${setPhoneValue(mainPhone)}`}></a>
        </div>

        <div className="col-5 text-right pl-0">
          <Link className="top__logo" href="/"></Link>
        </div>
      </div>

      <div id="header" className="header" itemscope itemtype="http://schema.org/WPHeader">
        <button className="header__btn header__btn_icon-close d-block d-md-none" type="button"></button>

        <Logo url={url} name={name} />

        <div className="affix__address col-lg-4 text-md-right mb-1 order-3 order-md-2">
          <div className="header__contacts header__contacts_icon-placemark">
            <a className="header__contacts-item header__contacts-item_ls2" href="https://maps.yandex.ru/?text=55.730218,36.857597" target="_blank">{city}</a>
            <a className="header__contacts-item header__contacts-item_ls01 mb-1" href="https://maps.yandex.ru/?text=55.730218,36.857597" target="_blank">{address}</a>
            <div className="header__contacts-text d-none d-lg-block">работаем с 1992 года</div>
          </div>
          <form className="header__search d-md-none" action="#" method="get">
            <input className="header__search-input" type="text" name="query" value="#" placeholder="Поиск по сайту" />
            <input className="header__search-btn" type="submit" value="" />
          </form>
        </div>

        <div className="affix__phone col-lg-5 text-md-right mb-1 order-2 order-md-3 pl-md-0">
          <div className="header__contacts header__contacts_icon-phone">
            <a className="header__contacts-item d-md-none" href="#">Записаться на приём</a>
            <a className="header__contacts-item" href={`tel:${setPhoneValue(mainPhone)}`}>{mainPhone}</a>
            <a className="header__contacts-item d-none d-lg-block" href={`tel:${setPhoneValue(extraPhone)}`}>{extraPhone}</a>
            <a className="header__contacts-item d-none d-lg-block mb-0" href={`tel:${setPhoneValue(mobilePhone)}`}>{mobilePhone}</a>
          </div>
        </div>
      </div>

      <Nav navItems={navItems} />
    </>
  );
}

export default Header;
