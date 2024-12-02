import React from 'react'

const FormButton = ({text, href, styles, fun, disabled}) => {
  return (
    <button onClick={()=>fun()} href={href} className={`flex justify-center ButtonFormSubmit  cursor-pointer px-10 py-3 rounded-lg bg-clickable-default hover:bg-clickable-hover active:bg-clickable-active transition-all text-base font-normal text-white 768:inline-block 768:text-xl ${styles}`} disabled={!disabled}>{text}</button>
  )
}

export default FormButton