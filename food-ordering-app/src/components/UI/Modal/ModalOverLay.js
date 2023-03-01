import React, { useContext } from "react"
import CartContext from "../../store/cart-context";
import Button from '../Button/Button';
import Card from '../Card';
import style from './ModalOverlay.module.css'
import ModalList from "./ModalList";

const ModalOverlay = (props) => {
    const ctx = useContext(CartContext)
    const isEmpty = ctx.items.length === 0;

    return (
        <div className={style[ 'modal-container' ]}>
            <Card className={style.card}>
                <ul>
                    {isEmpty ? <h1 className={style.empty}>Your cart is empty</h1> :
                        ctx.items.map((item) => {
                            return <ModalList
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                qty={item.qty}
                            />
                        })}
                </ul>
                <div className={`${style.total} ${isEmpty ? style[ 'total-empty' ] : '' }`}>
                        <h2>Total</h2>
                        <h2>${ctx.total}</h2>
                </div>
                <div className={style.controls}>
                    <Button onClick={props.onCloseModal}>Cancel</Button>
                    <Button>Order</Button>
                </div>

            </Card>
        </div>


    )
}

export default ModalOverlay;