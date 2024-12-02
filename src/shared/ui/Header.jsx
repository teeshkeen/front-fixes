import React, { useState } from 'react'
import SideBar from '../../features/mobile-menu/sidebar/Sidebar';
import OpenMenuIcon from '../../features/mobile-menu/icons/Open';
import CloseMenuIcon from '../../features/mobile-menu/icons/Close';
import DisableBodyScroll from '../utils/disablescroll';
import NavItem from './NavItem';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const onClose = () => {
    setMenuOpen(false);
  }


  return (
    <header className='relative'>
      <div className='flex justify-between items-center mb-5 768:mb-10 1440:block'>
        <div className='text-2xl 768:text-3xl 960:text-4xl 1440:hidden'><a href="/">УралПлата.рф</a></div>
        <div className="hidden 1440:flex  1440:justify-between 1440:items-center">
          <div className='hidden text-2xl 768:text-3xl 960:text-4xl 1440:flex'><a href="/">УралПлата.рф</a></div>
          <div className='flex gap-x-14 font-gilroyLight text-lg'>
            <NavItem id={''}>Главная</NavItem>
            <NavItem id={'about'}>О компании</NavItem>
            <NavItem id={'catalog'}>Каталог</NavItem>
            <NavItem id={'feedback'}>Отзывы</NavItem>
            <NavItem id={'contacts'} isRouting={false}>Контакты</NavItem>
          </div>

          <ul className='flex gap-x-14 font-gilroyLight text-lg'>
            <li><a className='text-link-default-color hover:text-link-hover-color active:text-link-active-color' href="tel:+73517767013">+7 (351) 776-70-13</a></li>
            <li><a className='text-link-default-color hover:text-link-hover-color active:text-link-active-color' href="mailto:uralplata74@yandex.ru">uralplata74@yandex.ru</a></li>
          </ul>
        </div>
        <div className="menuButton flex z-40 1440:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <OpenMenuIcon /> : ``}
        </div>
      </div>
      {isMenuOpen ? <DisableBodyScroll /> : ''}
      <SideBar isOpen={isMenuOpen} onClose={onClose} />
    </header>
  )
}

export default Header