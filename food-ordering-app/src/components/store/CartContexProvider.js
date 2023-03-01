import React, { useReducer } from "react";
import CartContext from './cart-context';

const cartReducer = (state, action) => {

    if(action.type === 'ADD_ITEM'){

        let totalQuantity = parseInt(state.totalQty) + parseInt(action.totalQty)
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]
        let updatedItems;

        let updatedTotal;

        if(existingItem){
            const updatedItem = {
                ...existingItem,
                qty: parseInt(existingItem.qty) + parseInt(action.item.qty)
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
            updatedTotal = state.total + updatedItem.price * action.item.qty


        }else{
            updatedItems = state.items.concat(action.item)
            updatedTotal = state.total + action.item.price * action.item.qty
        }

        return {
            items: updatedItems,
            total: updatedTotal,
            totalQty: totalQuantity
        }
        
    }

    if(action.type === 'REMOVE_ITEM'){
        let totalQuantity = parseInt(state.totalQty) - 1
        let updatedItems;
        let updatedTotal
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id)
        const existingItem = state.items[existingItemIndex]

        if(existingItem.qty === 1) {
            updatedItems = state.items.filter(item=>item.id !== action.id)
            updatedTotal = state.total - existingItem.price
        }else{
            const updatedItem = {
                ...existingItem,
                qty: parseInt(existingItem.qty) - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem

            updatedTotal = state.total - updatedItem.price

        }
        return {
            items: updatedItems,
            total: updatedTotal,
            totalQty: totalQuantity
        }
    }


    return initialValue;
}

const initialValue = { 
    items: [],
    total: 0,
    totalQty: 0
}

function CartContexProvider(props) {

    const [cartState, dispatchCart] =  useReducer(cartReducer, initialValue) 
    
    const addToCartHandler = (item) => {
        dispatchCart({
            type: 'ADD_ITEM',
            item: item,
            totalQty: item.qty
        })

      
    }

    const removeItemHandler = (item) => {
       dispatchCart({
        type: 'REMOVE_ITEM',
        id: item.id,
       })  

    }
    
    const contextValue = {
        items: cartState.items,
        total: cartState.total,
        totalQty: cartState.totalQty,
        addToCart: addToCartHandler,
        removeItem: removeItemHandler
    }

  return (
    <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartContexProvider