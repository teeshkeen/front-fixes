import React from 'react'
import { useState, useEffect } from 'react';
import { sendEmail } from '../../shared/utils/send';
import FormButton from './ui/FormButton';
import Modal from '../../shared/ui/Modal';
const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
    });
    const [formSubmit, setFormSubmit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const isFormDataComplete = () => {
        const { name, phone } = formData;
        return (
            name.trim() !== '' &&
            phone.trim() !== '' &&
            isChecked === true
        )
    };

    useEffect(() => {
        console.log(isFormDataComplete(), isFormDataComplete())
        if (isFormDataComplete()) {
            setFormSubmit(true);
        } else if (formSubmit && !isFormDataComplete()) {
            setFormSubmit(false);
        }
    }, [formData, isChecked]);



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((state) => ({
            ...state,
            [name]: value,
        }));
    };
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };


    const handleSubmit = () => {
        const content = `
    Новая заявка на обратную связь!

    Имя: ${formData.name}
    Номер телефона: ${formData.phone}
    `;
        sendEmail({ content });
        setShowModal(true);
        setFormData({ name: '', phone: ''});
        setIsChecked(false);
        console.log('sended');
        setTimeout(() => {
            setShowModal(false);
        }, 5000);
    };
    
    return (
        <div id='getintouch' className='flex flex-col bg-white rounded-md mx-auto text-center justify-center p-10 shadow-md mb-14
        768:block
        768:max-w-full 768:rounded-lg 768:mb-24 768:py-12
        960:max-w-get-in-touch
        '>
            <div className="text-2xl font-gilroyMedium mb-2 768:text-3xl">Оставьте заявку</div>
            <div className='text-base font-gilroyLight leading-5 mb-5 768:text-xl'>Наши специалисты свяжутся с вами через несколько минут</div>
            <div className="flex flex-col mb-5 items-center">

                <form className='space-y-2 768:max-w-md' name='get-in-touch' action="" onSubmit={e => e.preventDefault()}>
                    <input name='name' className='p-3 bg-white w-full rounded-lg outline-none shadow-lg' id='name' type="text" placeholder='Имя' onChange={handleChange}
                    value={formData.name}/>
                    <input name='phone' className='p-3 bg-white w-full rounded-lg outline-none shadow-lg' id='phone' type="phone" placeholder='Телефон' onChange={handleChange}
                    value={formData.phone}/>
                    {/* <button form='get-in-touch' type='submit' onClick={handleSubmit}>ASdasdasd</button> */}
                </form>

            </div>


            <div className="flex justify-center items-center text-left mb-5 space-x-2 768:mb-10">
                <input className='flex border-transparent focus:border-transparent focus:ring-0
                w-4 h-4 text-white bg-gray-100 border-gray-300 rounded accent-clickable-active  dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600' type="checkbox" id='check-box' checked={isChecked} 
        onChange={handleCheckboxChange} />
                <label className='text-base font-gilroyLight leading-5 ' for="check-box">Я согласен с политикой конфиденциальности</label>
            </div>
            <FormButton text='Отправить' fun={handleSubmit} disabled={formSubmit}/>
            {showModal && (
            <Modal 
                message="Ваша заявка успешно отправлена!" 
                onClose={() => setShowModal(false)} 
            />
        )}
        </div>
    )
}

export default GetInTouch