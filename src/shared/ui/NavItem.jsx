import React from 'react'

const NavItem = ({ id, children, isRouting = true}) => {
  return (
    <div>
      {isRouting ? <a href={`/#${id}`} className='text-link-default-color hover:text-link-hover-color active:text-link-active-color'>{children}</a> : <a href={`#${id}`} className='text-link-default-color hover:text-link-hover-color active:text-link-active-color'>{children}</a>}
    </div>
  )
}

export default NavItem