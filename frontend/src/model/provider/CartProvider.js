import {createContext, useContext, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {

    // 購物車
    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{
            cart, setCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);
    if (context) {
        return context
    } else {
        throw Error("Context was used outside of the Provider")
    }
}

export {CartProvider, useCart};