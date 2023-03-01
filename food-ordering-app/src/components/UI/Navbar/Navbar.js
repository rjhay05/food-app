import React from 'react'
import CartButton from '../../CartButton/CartButton';
import style from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={style.navbar}>
        <ul>
            <li><h1>Betty's Kitchen</h1></li>
            <li><CartButton /></li>
        </ul>
    </nav>
  )
}

export default Navbar