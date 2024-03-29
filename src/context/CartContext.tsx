"use client";
import { CartItem } from "@/lib/types";
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (index: number) => void;
  increaseQuantity: (index: number) => void;
  decreaseQuantity: (index: number) => void;
  clearCart: () => void;
}

const CART_STORAGE_KEY = "cart";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item: CartItem) => {
    let duplicate = false;
    for (const cartItem of cartItems) {
      if (
        cartItem.product.id === item.product.id &&
        cartItem.chipSize === item.chipSize &&
        cartItem.coverSize === item.coverSize
      ) {
        cartItem.quantity += item.quantity;
        duplicate = true;
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        break;
      }
    }
    if (!duplicate) {
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCart));
  };

  const increaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity += 1;
    setCartItems(updatedCartItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity -= 1;
    setCartItems(updatedCartItems);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};
