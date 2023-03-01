import React, { useState } from 'react'
import style from './MenuForm.module.css'
import Button from '../UI/Button/Button'


function MenuForm(props) {
    const [ inputQuantity, setInputQuantity ] = useState('')


    const inputHandler = (event) => {
        setInputQuantity(event.target.value)

    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (inputQuantity !== '') {
            props.addToCart(inputQuantity)
            setInputQuantity('')
        }

    };


    return (
        <div className={style.actions}>
            <form onSubmit={submitHandler}>
                <label htmlFor={props.id}>Quantity: </label>
                <input type='number'
                    id={props.id}
                    min='1'
                    max='99'
                    onChange={inputHandler}
                    value={inputQuantity}
                />
                <Button type='submit'>Add</Button>
            </form>
        </div>




    )
}

export default MenuForm