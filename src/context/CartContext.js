import { createContext, useState, useEffect } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    console.log("Use effect from CartProvider")
    try {
      if(localStorage.getItem("cart")){
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for(let i = 0; i < keys.length; i++){
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }

  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = { ...cart };
    if(itemCode in cart){
      myCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      myCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
  }

  const clearCart = () => {
    setCart({});
    saveCart({});
    console.log("Cart has been cleared");
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
      myCart[itemCode].qty = cart[itemCode].qty - 1;
    }
    if(myCart[itemCode].qty <= 0){
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, subTotal }}>
      {children}
    </CartContext.Provider>
  );
};
