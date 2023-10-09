import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        if (cartProducts?.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cartProducts));
        }
    }, [cartProducts]);

    useEffect(() => {
        // setCartProducts(JSON.stringify(localStorage.getItem('cart')));
        const cart = JSON.parse(localStorage.getItem('cart'));
        console.log(cart);
        setCartProducts(cart);
      }, [])

    function addProduct(productId) {
        setCartProducts(prev => {
            if (prev === null) {
                return [productId];
            } else {
                return [...prev, productId];
            }
        });
    }
    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct }}>
            {children}
        </CartContext.Provider>
    );
}
