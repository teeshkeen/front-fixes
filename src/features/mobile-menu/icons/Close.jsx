import React from 'react'

const CloseMenuIcon = ({styles = ''}) => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-8 768:size-10 960:size-11 ${styles}`}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>

    </div>
  )
}

export default CloseMenuIcon