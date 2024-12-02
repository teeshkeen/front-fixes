import React from 'react'
import tg from '../../assets/images/tg.svg'
import vk from '../../assets/images/vk.svg'
import Button from './Button'

const Contacts = () => {
    return (
        <div id='contacts' className='mb-14 768:mb-24'>
            <div className='mb-5'>
                <h1 className='font-gilroyMedium text-2xl 768:text-4xl'>Контакты</h1>
            </div>
            <div className='mb-14 960:flex 960:flex-row-reverse 960:justify-between'>
            <div >
                        <a className='hidden  text-link-default-color hover:text-link-hover-color active:text-link-active-color 1280:block text-xl font-gilroyLight' href="https://yandex.ru/maps/-/CDd6y852">Открыть в Яндекс.Картах</a>                        </div>
                <div className="">
                    <div className='text-xl font-gilroyLight'>
                        <div className='mb-5'>
                            <div className='mb-2'>
                                <div className="flex flex-col mb-5 ">
                                    <span>пер. Ужгородский, д. 23/1</span>
                                    <span>Круглосуточно</span>
                                </div>
                                <div className="flex flex-col">
                                    <span>ул. Шоссе металлургов д. 78</span>
                                    <span>Пн-Пт 9:00 — 18:00</span>
                                </div>
                            </div>
                            <a  href="https://yandex.ru/maps/-/CDd6y852" className='block 960:hidden text-link-default-color hover:text-link-hover-color active:text-link-active-color'>Открыть в Яндекс.Картах</a>
                        </div>

                        <div className="flex flex-col mb-5">
                            <span>Прием звонков: круглосуточно</span>
                            <span className='text-link-default-color hover:text-link-hover-color active:text-link-active-color'><a href="tel:+73517767013">+7 (351) 776-70-13</a>, <a href="tel:+79000614535">+7 (900) 061-45-35</a></span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                        {/* <div className=''>
                            <h1 className='font-gilroyMedium text-lg 768:text-xl'>Мы в социальных сетях:</h1>
                        </div> */}
                        {/* <div className="flex items-center space-x-4">
                            <a href="/">
                                <img className='size-9' src={vk} alt="" />
                            </a>

                            <a href="/">
                                <img className='size-9' src={tg} alt="" />
                            </a>
                        </div> */}

                    </div>

                </div>
            </div>
            <div>
            <div className='mb-4'>
                <h1 className='font-gilroyMedium text-2xl 768:text-4xl'>Почтовые отправления</h1>
            </div>
            <div className="flex flex-col text-xl font-gilroyLight">
                <div className="mb-5">
                    <div className="">Отправляйте — получайте честный расчёт!</div>
                </div>
                <div className="mb-5">
                    <div className="">Прием звонков: Пн-Сб (10:00 — 19:00)</div>
                    <div className="tel:+73517770266">+7 (351) 777-02-66</div>
                </div>
            </div>
            <Button href={'tel:+73517770266'} text='Позвонить' />
        </div>
        </div>
    )
}

export default Contacts