import React from 'react'

const NomenclatureTitle = ({title = 'Конденсаторы', cost = '50 000'}) => {
  return (
    <div className='mb-5 mt-10 768:mb-10'>
        <div className="mb-[10px] font-gilroyMedium text-2xl 768:text-[32px]">{title}</div>
        <div className="font-gilroyLight text-base 768:text-[20px]">Оптовые цены от {cost} тысяч рублей</div>
    </div>
  )
}

export default NomenclatureTitle