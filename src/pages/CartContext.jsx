"use client"
import { createContext, useContext, useState } from "react"

// Create CartContext
const CartContext = createContext()

// Custom hook to access cart context
export const useCart = () => {
  return useContext(CartContext)
}

// Helper to generate a unique key for cart items
const getCartItemKey = (item) => {
  let key = `${item.id}`
  if (item.withDupatta !== undefined) {
    key += `-${item.withDupatta}`
  }
  // Only include scent in the key for product ID 8
  if (item.id === 8 && item.scent !== undefined) {
    key += `-${item.scent}`
  }
  return key
}

// CartProvider component that provides cart context to the rest of the app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]) // Cart state to hold cart items

  // Function to add product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const productKey = getCartItemKey(product)
      const existingProduct = prevItems.find((item) => getCartItemKey(item) === productKey)

      if (existingProduct) {
        return prevItems.map((item) =>
          getCartItemKey(item) === productKey
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item,
        )
      }
      return [...prevItems, { ...product, quantity: product.quantity }]
    })
  }

  // Function to remove product from the cart
  const removeFromCart = (productId, withDupatta, scent) => {
    setCartItems((prevItems) => {
      const itemToRemoveKey = getCartItemKey({ id: productId, withDupatta, scent })
      return prevItems.filter((item) => getCartItemKey(item) !== itemToRemoveKey)
    })
  }

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, withDupatta, scent, quantity) => {
    if (quantity < 1) return // Prevent quantity from being less than 1
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        const itemToUpdateKey = getCartItemKey({ id: productId, withDupatta, scent })
        return getCartItemKey(item) === itemToUpdateKey ? { ...item, quantity: quantity } : item
      }),
    )
  }

  // Function to calculate the total price of all cart items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        calculateTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
