import React from 'react'

const Footer = () => {
    const today = new Date();
    
    return (
        <div className='relative text-white'>
            <div className="bg-color-full-w"></div>
            <div className="relative py-10 768:px-5">
                <div className="mb-14 space-y-10 768:flex 768:flex-row 768:justify-between 768:items-start 768:space-y-0 768:mb-24">
                    <div className="">
                        <div className="mb-5 text-lg 768:text-xl">Меню</div>
                        <ul className='font-gilroyLight text-base space-y-2 768:text-lg'>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="/">Главная</a></li>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="/#about">О компании</a></li>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="/#catalog">Каталог</a></li>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="/#feedback">Отзывы</a></li>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="/#contacts">Контакты</a></li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="mb-5 text-lg 768:text-xl">Контакты</div>
                        <ul className='font-gilroyLight text-base space-y-2 768:text-lg'>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="tel:+73517767013">+7 (351) 776-70-13</a></li>
                            <li><a className='hover:text-link-hover-color active:text-link-active-color' href="mailto:uralplata74@yandex.ru">uralplata74@yandex.ru</a></li>
                        </ul>
                    </div>

                    <div className="">
                        <div className="mb-5 text-lg 768:text-xl">Адрес</div>
                        <ul className='font-gilroyLight text-base space-y-2 768:text-lg'>
                            <li>г. Челябинск</li>
                            <li>
                                <ul className='space-y-1'>
                                    <li>пер. Ужгородский, д. 23/1</li>
                                    <li>Круглосуточно</li>
                                </ul>
                            </li>
                            <li>
                                <ul className='space-y-1'>
                                    <li>ул. Шоссе металлургов д. 78</li>
                                    <li>Пн-Пт 9:00 — 18:00</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center">
                    <div className="font-gilroyLight text-base 768:text-lg">Copyright © 2019 - <span>{today.getFullYear()}</span></div>
                    <div className="text-lg 768:text-xl">УралПлата</div>
                    <div className="text-xs font-gilroyLight text-white hover:text-gray-400 active:text-gray-600"><a href="https://t.me/teeshkeen">Сайт разработан  — teeshkeen</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer