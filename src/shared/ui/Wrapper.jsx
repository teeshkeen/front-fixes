import React from 'react'

const Wrapper = ({ children }) => {
  return (
    <div className='absolute z-1 pt-5 px-5 w-screen font-gilroyMedium
                    1280:pt-10 1280:px-10
                    1920:pt-10 1920:px-60'>
        {children}
    </div>
  )
}

export default Wrapper