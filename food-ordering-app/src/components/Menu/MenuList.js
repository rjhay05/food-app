import React, { useContext } from 'react';
import MenuForm from './MenuForm';
import Card from '../UI/Card';
import style from './MenuList.module.css';
import CartContext from '../store/cart-context';

function MenuList(props) {

    const ctx = useContext(CartContext);

    const addToCartHandler = (quantity) => {
        ctx.addToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            qty: quantity
        })
    }
    return (
        <li>
            <Card className={style[ 'list-item' ]}>
                <div className={style[ 'item-description' ]}>
                    <h2>{props.name}</h2>
                    <i>{props.description}</i>
                    <h3>₱{props.price}</h3>
                </div>
                <MenuForm id={props.id} addToCart={addToCartHandler}/>
            </Card>
        </li>
    )

}

export default MenuList