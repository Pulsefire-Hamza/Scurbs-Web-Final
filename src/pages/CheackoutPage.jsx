"use client"

import { useState } from "react"
import { useCart } from "../pages/CartContext/" // Assuming this path is correct in your project
import emailjs from "emailjs-com"
import { toast, ToastContainer } from "react-toastify"
import ReactConfetti from "react-confetti"
import "react-toastify/dist/ReactToastify.css"

export default function CheckoutPage() {
  const { cartItems, calculateTotal } = useCart()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [phone, setPhone] = useState("")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const paymentMethod = "easypaisa" // Payment method is now fixed to EasyPaisa
  const [screenshotSent, setScreenshotSent] = useState(false) // New state for screenshot confirmation

  const DELIVERY_CHARGE = 320
  const subtotal = Number(calculateTotal())
  const totalWithDelivery = subtotal + DELIVERY_CHARGE
  const SERVICE_ID = "service_3vh1mlp"
  const TEMPLATE_ID = "template_y6isi27"
  const USER_ID = "EjxpOz50LS55rbzFy"
  const WHATSAPP_NUMBER = "923419065269" // Define WhatsApp number

  const sendOrderEmail = () => {
    const orderDetails = cartItems
      .map((item, index) => {
        const extraDetails = item.id === 8 ? ` (Scent: ${item.scent || "-"}, Kilos: ${item.kilos || "-"})` : ""
        return `${index + 1}. ${item.name}${extraDetails} - Rs ${
          item.price
        } x ${item.quantity} = Rs ${(item.price * item.quantity).toLocaleString()}`
      })
      .join("\n")

    const paymentInfo = `\n\n💳 Payment Method: Online Payment (EasyPaisa)\n   Screenshot Sent: ${screenshotSent ? "Yes" : "No"}`

    const message = `🛒 *New Order Received!*\n\n👤 *Customer Info:*\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone}\n- Address: ${address}, ${city}\n📦 *Order Summary:*\n${orderDetails}\n🚚 Delivery Charges: Rs ${DELIVERY_CHARGE}\n💰 Grand Total: Rs ${totalWithDelivery}${paymentInfo}`

    const emailParams = {
      from_name: name,
      from_email: email,
      to_name: "Your Name",
      message: message,
      reply_to: email,
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailParams, USER_ID)
      .then((response) => {
        console.log("Email sent successfully", response)
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  const handleCheckout = () => {
    if (!name || !email || !address || !city || !phone) {
      toast.error("Please fill in all billing information fields.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        style: {
          backgroundColor: "#F7C8D4",
          color: "#000",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "20px",
        },
      })
      return
    }

    if (!screenshotSent) {
      // Simplified condition as paymentMethod is always easypaisa
      toast.error("Please confirm you have sent the payment screenshot.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        style: {
          backgroundColor: "#F7C8D4",
          color: "#000",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "20px",
        },
      })
      return
    }

    setIsLoading(true)
    setIsOrderComplete(false)
    sendOrderEmail()
    setTimeout(() => {
      setIsLoading(false)
      toast.success("Your Order Has Been Placed!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        draggable: true,
        style: {
          backgroundColor: "#F7C8D4",
          color: "#000",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "20px",
        },
      })
      setOrderPlaced(true)
      setTimeout(() => {
        setOrderPlaced(false)
      }, 20000)
      setName("")
      setEmail("")
      setAddress("")
      setCity("")
      setPhone("")
      setScreenshotSent(false) // Reset screenshot confirmation
      setIsOrderComplete(true)
    }, 2500)
  }

  const handleContinueShopping = () => {
    window.location.href = "/"
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-rose-100 px-4">
        <div className="text-center py-16 bg-white rounded-2xl shadow-2xl max-w-md w-full">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-900 mb-4">Your cart is empty!</h2>
          <p className="text-lg text-pink-600 mb-8">Start shopping to add items to your cart!</p>
          <button
            onClick={handleContinueShopping}
            className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Shopping
          </button>
        </div>
      </div>
    )
  }

  const isFormValid = name && email && address && city && phone
  const isCheckoutButtonDisabled = !isFormValid || isLoading || !screenshotSent // Simplified condition

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="pt-20 sm:pt-28 lg:pt-36 pb-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 text-center mb-4"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Checkout
          </h1>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
        </div>
        {isOrderComplete ? (
          <div className="text-center py-16">
            <h2 className="text-3xl font-semibold text-pink-500 mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
              Your order has been placed successfully!
            </h2>
            <h3 className="text-3xl font-semibold text-pink-500 mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
              Thanks for choosing Scurbs Bakery 😊
            </h3>
            <button
              onClick={handleContinueShopping}
              className="mt-6 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Billing Information */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 h-fit">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Billing Information</h2>
              </div>
              <div className="space-y-6">
                {[
                  {
                    label: "Full Name",
                    value: name,
                    setter: setName,
                    type: "text",
                    placeholder: "Enter your full name",
                    icon: "👤",
                  },
                  {
                    label: "Email Address",
                    value: email,
                    setter: setEmail,
                    type: "email",
                    placeholder: "Enter your email",
                    icon: "📧",
                  },
                  {
                    label: "Address",
                    value: address,
                    setter: setAddress,
                    type: "text",
                    placeholder: "Enter your address",
                    icon: "🏠",
                  },
                  {
                    label: "City",
                    value: city,
                    setter: setCity,
                    type: "text",
                    placeholder: "Enter your city",
                    icon: "🏙️",
                  },
                  {
                    label: "Phone Number",
                    value: phone,
                    setter: setPhone,
                    type: "tel",
                    placeholder: "Enter your phone number",
                    icon: "📱",
                  },
                ].map((field, i) => (
                  <div key={i} className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <span className="mr-2">{field.icon}</span>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      value={field.value}
                      onChange={(e) => field.setter(e.target.value)}
                      className="w-full p-4 border-2 border-pink-200 rounded-xl focus:outline-none focus:border-pink-400 focus:ring-4 focus:ring-pink-100 transition-all duration-300 text-gray-800 placeholder-gray-400"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              {/* Payment Method Selection - Moved here */}
              <div className="mt-8 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h3>
                <div className="p-6 bg-pink-50 rounded-2xl border-2 border-pink-200 text-gray-800">
                  <h4 className="font-bold text-lg mb-3">Online Payment (EasyPaisa)</h4>
                  <p className="mb-2">
                    <span className="font-semibold">Account Number:</span> 03419065269
                  </p>
                  <p className="mb-4">
                    <span className="font-semibold">Account Name:</span> MANAHIL ARIF
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I've made a payment for my order. Here's the screenshot:")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
                  >
                    <span className="mr-2 text-xl">💬</span>
                    Send Screenshot on WhatsApp
                  </a>
                  <div className="flex items-center space-x-2 mt-4">
                    <input
                      type="checkbox"
                      id="screenshot-sent"
                      checked={screenshotSent}
                      onChange={(e) => setScreenshotSent(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                    />
                    <label htmlFor="screenshot-sent" className="text-sm font-medium leading-none cursor-pointer">
                      I have sent the payment screenshot.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Order Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  2
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Order Summary</h2>
              </div>
              {/* Cart Items */}
              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 bg-pink-50 rounded-2xl border border-pink-100"
                  >
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl shadow-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-semibold text-pink-800 truncate">{item.name}</h3>
                      {item.id === 8 && (
                        <p className="text-xs text-gray-600 mt-1">
                          {item.scent && `Scent: ${item.scent}`}
                          {item.kilos && ` | Kilos: ${item.kilos}kg`}
                        </p>
                      )}
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-gray-600">
                          Rs {item.price.toLocaleString()} × {item.quantity}
                        </span>
                        <span className="font-bold text-pink-700">
                          Rs {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border-2 border-pink-200">
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Subtotal</span>
                    <span className="font-semibold">Rs {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">🚚 Delivery Charges</span>
                    <span className="font-semibold">Rs {DELIVERY_CHARGE.toLocaleString()}</span>
                  </div>
                  <div className="border-t-2 border-pink-300 pt-3">
                    <div className="flex justify-between text-xl font-bold text-pink-700">
                      <span>Total</span>
                      <span>Rs {totalWithDelivery.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <button
                  className={`w-full mt-6 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                    isCheckoutButtonDisabled
                      ? "bg-pink-300 text-pink-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 hover:scale-105 shadow-lg hover:shadow-xl"
                  }`}
                  onClick={handleCheckout}
                  disabled={isCheckoutButtonDisabled}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-6 h-6 border-3 border-t-3 border-pink-600 border-solid rounded-full animate-spin"></div>
                      <span>Placing your order...</span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">🛍️</span>
                      Complete Order
                    </span>
                  )}
                </button>
                <p className="text-sm text-center text-pink-600 mt-4 font-medium">📦 Delivery all over Pakistan!</p>
              </div>
            </div>
          </div>
        )}
        <ToastContainer />
        {orderPlaced && <ReactConfetti />}
      </div>
    </div>
  )
}
