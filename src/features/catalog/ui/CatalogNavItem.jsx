import React from 'react'
import handleCardClick from '../../../shared/utils/scroll'

const CatalogNavItem = ({title}) => {
  return (
    <div onClick={handleCardClick} className='cursor-pointer flex items-center w-full p-2 hover:bg-clickable-hover active:bg-clickable-active hover:text-white hover:rounded-lg'>
        <button className='flex text-lg font-gilroyLight'>{title}</button>
    </div>
  )
}

export default CatalogNavItem