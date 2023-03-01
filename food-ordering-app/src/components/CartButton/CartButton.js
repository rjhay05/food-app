import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../store/cart-context';
import Modal from '../UI/Modal/Modal';
import style from './CartButton.module.css';

function CartButton() {

  const ctx = useContext(CartContext);
  const [ isBtnHighlighted, setIsButtonHighlited ] = useState(false);
  const [ isCartModal, setIsCardModal ] = useState(false);

  const bump = style.bump;

  useEffect(() => {
    setIsButtonHighlited(true)

    const timer = setTimeout(() => {
      setIsButtonHighlited(false)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [ ctx.totalQty ])



  const showModalHandler = () => {
    setIsCardModal(true);
  }

  const closeModalHandler = () => {
    setIsCardModal(false);
  }

  return (
    <>
      <button
        className={`${style.button} ${isBtnHighlighted ? bump : ''}`}
        onClick={showModalHandler}
      >
        Your Cart <span>{ctx.totalQty}</span>
      </button>
      {isCartModal && <Modal onCloseModal={closeModalHandler} />}
    </>

  )
};

export default CartButton