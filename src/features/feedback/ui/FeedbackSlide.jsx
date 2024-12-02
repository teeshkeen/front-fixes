import React from 'react';


const FeedbackSlide = ({ avatar, name, date, text, onOpenModal }) => {

    return (
        <div className='flex justify-center items-center mx-3 mb-2' style={{ height: '200px' }}>
            <div className="max-w-max rounded-xl drop-shadow-md shadow-md h-full">
                <div className="p-5 space-y-5 h-full">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <img className='size-10 rounded-lg' src={avatar} alt="" />
                            <div className="flex flex-col">
                                <div className="font-gilroyMedium text-md font-thin">{name}</div>
                                <div className="font-gilroyLight text-sm font-thin text-gray-400">{date}</div>
                            </div>
                        </div>
                    </div>
                    <div className="max-h-24 overflow-hidden relative">
                        <p className='font-gilroyLight text-md leading-5'>
                            {text.length > 90 ? text.slice(0, 90) + '...' : text}
                            {text.length > 90 && (
                                <div
                                    className='text-gray-500 cursor-pointer'
                                    onClick={onOpenModal} // Используем переданную функцию для открытия модала
                                >
                                    Еще...
                                </div>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSlide;