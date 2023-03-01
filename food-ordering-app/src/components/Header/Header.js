import React from 'react'
import style from './Header.module.css'
import Navbar from '../UI/Navbar/Navbar';
import headerImg from '../IMG/buffet-food.jpg'
import Card from '../UI/Card';

function Header(props) {
  return (
    <div className={style.header}>
      <Navbar qty={props.qty} />
      <div className={style.image}>
        <img src={headerImg} alt='Header' />
      </div>
      <Card className={style[ 'header-card' ]}>
        <div className={style.title}>
          <h1>Delicious Food, Delivered To You</h1>
        </div>
        <div className={style.content}>
          <p>Choose you favorite meal from our board selection of available meals and enjoy delicious lunch or dinner at home.</p>
          <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
      </Card>
    </div>
  )
}

export default Header;