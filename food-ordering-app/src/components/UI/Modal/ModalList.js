import React, { useContext } from 'react'
import style from './ModalList.module.css';
import CartContext from '../../store/cart-context';

function ModalList(props) {
    const ctx = useContext(CartContext)
    const removeItemHandler = () => {
        ctx.removeItem({
            id: props.id,
            qty: props.qty,
        })
    }

    const addQtyHandler = () => {
        ctx.addToCart({
            id: props.id,
            qty: 1
        })
       
    }

    return (
        <>
            <li className={style.list}>
                <div className={style[ 'item-list' ]}>
                    <h3>{props.name}</h3>
                    <p><i>₱{props.price}</i></p>
                    <span>x{props.qty}</span>
                </div>
                <div className={style.actions}>
                    <button className={style[ 'button-subtract' ]}
                        onClick={removeItemHandler}>
                        -
                    </button>
                    <button className={style[ 'button-add' ]
                    }
                        onClick={addQtyHandler}>
                        +
                    </button>
                </div>
            </li>
        </>
    )
}

export default ModalList