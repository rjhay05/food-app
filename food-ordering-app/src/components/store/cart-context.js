import React from "react";

const CartContext = React.createContext({
    items: [],
    total: 0,
    totalQty: 0,
    addToCart: (item) => {},
    removeItem: (item) => {}
})

export default CartContext;