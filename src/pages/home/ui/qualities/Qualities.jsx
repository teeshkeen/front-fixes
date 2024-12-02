import React from 'react'
import QualitiesCard from './ui/QualitiesCard'


const Qualities = () => {
  return (
    <div className='mb-24
                    justify-center grid grid-cols-1 grid-rows-4 gap-4
                    space-y-5
                    768:grid 768:grid-cols-2 768:grid-rows-2 768:gap-4 768:space-y-0
                    1920:grid 1920:grid-cols-4 1920:grid-rows-1 1920:gap-4
                    '>
        <QualitiesCard title='Гарантия качества' desc='Гарантия от производителя, имеются все сертификаты качества' image={1}/>
        <QualitiesCard title='Безопасность' desc='Все платежи проходят через безопасное соединение' image={2}/>
        <QualitiesCard title='Доставка в срок' desc='Доставка осуществляется в день оплаты' image={3}/>
        <QualitiesCard title='Отличные цены' desc='Оплата наличным
и безналичным способом' image={4}/>
    </div>
  )
}

// flex flex-col space-y-5 mb-14 
// 768:mb-24 768:gap-5 768:flex-row 768:space-y-0

export default Qualities
