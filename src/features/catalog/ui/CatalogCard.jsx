import React from 'react'
import Button from '../../../shared/ui/Button'
import handleCardClick from '../../../shared/utils/scroll'

const CatalogCard = ({ title, cost, imageUrl }) => {
    return (
        <div onClick={handleCardClick} className="flex flex-col text-center h-full rounded overflow-hidden shadow-lg 360:min-w-[320px] 1280:min-w-[290px] 1355:min-w-[320px]">
            <div className="relative pt-[75%]"> {/* 4:3 Aspect Ratio */}
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={imageUrl}
                    alt={title}
                />
            </div>
            <div className="px-6 py-4 flex-grow flex flex-col justify-between">
                <div>
                    <div className="font-bold text-[18px] 768:text-[20px] mb-2 line-clamp-2">{title}</div>
                    <p className="text-gray-700 text-[16px] 768:text-[18px]">
                        до {cost} т.р. / кг
                    </p>
                </div>
                <div className="flex justify-center mt-4">
                    <Button styles={`w-[180px]`} text='Подробнее' />
                </div>
            </div>
        </div>
    )
}

export default CatalogCard