import React from 'react'

const Button = ({text, href, styles, onClick}) => {
  return (
    <a onClick={onClick} href={href} className={`flex justify-center ButtonFormSubmit cursor-pointer px-10 py-3 rounded-[10px]
       bg-clickable-default hover:bg-clickable-hover active:bg-clickable-active transition-all text-base font-normal
        text-white 768:inline-block text-[16px] 768:text-[18px]
     ${styles}`}>
      <div className="text-center">{text}</div>
      </a>
  )
}

export default Button