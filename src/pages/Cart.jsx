"use client"
import { useCart } from "../pages/CartContext" // Ensure correct path to your context
import { useNavigate } from "react-router-dom"
import { FaTrash } from "react-icons/fa" // ✅ Import dustbin icon

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate("/checkout")
  }

  const CartRow = ({ item }) => {
    return (
      <div key={item.id} className="border-b border-gray-100 last:border-b-0">
        {/* Mobile Layout */}
        <div className="block sm:hidden p-4">
          <div className="flex gap-3">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 text-sm leading-tight">{item.name}</h3>
              {item.id === 8 && (
                <p className="text-xs text-gray-500 mt-1">
                  {item.scent && `Scent: ${item.scent}`}
                  {item.kilos && ` | Kilos: ${item.kilos}kg`}
                </p>
              )}
              <p className="text-lg font-semibold text-gray-900 mt-1">Rs {item.price.toLocaleString()}</p>
            </div>
            <button
              className="text-red-500 hover:text-red-700 text-sm self-start p-1"
              onClick={() => removeFromCart(item.id, item.withDupatta, item.scent)}
              aria-label={`Remove ${item.name} from cart`}
            >
              ×
            </button>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="flex items-center border rounded-lg">
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-lg"
                onClick={() => updateQuantity(item.id, item.withDupatta, item.scent, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 text-lg"
                onClick={() => updateQuantity(item.id, item.withDupatta, item.scent, item.quantity + 1)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-900">Rs {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          </div>
        </div>
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center gap-4 py-6 px-6">
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            {item.id === 8 && (
              <p className="text-sm text-gray-500 mt-1">
                {item.scent && `Scent: ${item.scent}`}
                {item.kilos && ` | Kilos: ${item.kilos}kg`}
              </p>
            )}
            <p className="text-lg font-semibold text-gray-900 mt-1">Rs {item.price.toLocaleString()}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                onClick={() => updateQuantity(item.id, item.withDupatta, item.scent, item.quantity - 1)}
                disabled={item.quantity <= 1}
                aria-label={`Decrease quantity of ${item.name}`}
              >
                -
              </button>
              <span className="w-12 text-center text-sm font-medium">{item.quantity}</span>
              <button
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-50"
                onClick={() => updateQuantity(item.id, item.withDupatta, item.scent, item.quantity + 1)}
                aria-label={`Increase quantity of ${item.name}`}
              >
                +
              </button>
            </div>
            {/* ✅ Replace "Remove" text with dustbin icon */}
            <button
              className="text-red-500 hover:text-red-700 text-lg"
              onClick={() => removeFromCart(item.id, item.withDupatta, item.scent)}
              aria-label={`Remove ${item.name} from cart`}
            >
              <FaTrash />
            </button>
            <div className="text-right min-w-[100px]">
              <p className="font-semibold text-gray-900">Rs {(item.price * item.quantity).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center bg-white p-8 sm:p-12 rounded-lg shadow-sm max-w-md w-full">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some items to get started</p>
          <a
            href="/shop"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors w-full sm:w-auto"
          >
            Start Shopping
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="text-center mb-6 sm:mb-8 pt-16 sm:pt-24">
          <h1
            className="text-2xl sm:text-3xl font-bold text-gray-900 pt-10"
            style={{ fontFamily: "Pacifico, cursive" }}
          >
            Shopping Cart
          </h1>
          <p className="text-sm text-gray-600 mt-2 sm:hidden">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-100">
            {cartItems.map((item) => (
              <CartRow key={item.id} item={item} />
            ))}
          </div>
          <div className="border-t p-4 sm:p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-sm"
              rows={3}
              placeholder="Add a note to your order..."
              aria-label="Order note"
            />
          </div>
          <div className="border-t p-4 sm:p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                Rs {calculateTotal().toLocaleString()}
              </span>
            </div>
            <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-3">
              <a
                href="/shop"
                className="block sm:flex-1 text-center py-3 px-4 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </a>
              <button
                className="block w-full sm:flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors font-medium"
                onClick={handleCheckout}
                aria-label="Proceed to checkout"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 sm:hidden">
          <p className="text-sm text-gray-500">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default CartPage
