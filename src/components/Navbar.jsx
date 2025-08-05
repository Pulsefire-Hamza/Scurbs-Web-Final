"use client"

import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaShoppingBag, FaBars, FaTimes, FaSearch } from "react-icons/fa"
// Assuming useCart is defined elsewhere, e.g., in a CartContext file
// import { useCart } from "../pages/CartContext";

// Placeholder for useCart if it's not provided in the context
// In a real application, you would have a proper CartContext.
const useCart = () => {
  // Dummy implementation for demonstration
  const [cartItems, setCartItems] = useState([])
  return { cartItems }
}

// Sample products array for search filter
const products = [
  {
    id: 1,
    name: "Gift Bag",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(8).jpeg",
  },
  {
    id: 2,
    name: "Caramel Latte Lip Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(3).jpeg",
  },
  {
    id: 3,
    name: "Bubblegum Lip Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(8).jpeg",
  },
  {
    id: 4,
    name: "Coconut Dream Foaming Body Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(5).jpeg",
  },
  {
    id: 5,
    name: "Vanilla Soufflé Foaming Body Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(2).jpeg",
  },
  {
    id: 6,
    name: "Peppermint Crush Foaming Body Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(4).jpeg",
  },
  {
    id: 7,
    name: "Pineapple Delight Foaming Body Scrub",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(3).jpeg",
  },
   {
    id: 8,
    name: "Foaming Body Scrubs - Wholesale",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
  },
   {
    id: 9,
    name: "Rosie Aur Bubblie Lip Care Duo",
    image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/8ecda70a-d24a-440b-9e3f-6989a5de5206.jpeg",
  },
]

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([])
  const searchRef = useRef(null)
  const { cartItems } = useCart()
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(query)))
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false)
      }
    }
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSearch])

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f7c8d4] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-6">
        {/* Hamburger Icon */}
        <div className="text-xl md:hidden">
          <FaBars className="cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
        </div>
        {/* Logo */}
        <div className="flex-1 text-center">
          <Link to="/" className="inline-block">
            <img
              src="https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/cropped-LOGO-removebg-preview.png"
              alt="Hoorab Bakery Logo"
              className="h-14 sm:h-20 mx-auto"
            />
          </Link>
        </div>
        {/* Search + Bag Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4 text-lg sm:text-xl relative">
          {showSearch ? (
            <FaTimes
              className="text-gray-700 hover:text-[#c16452] text-[20px] sm:text-2xl cursor-pointer transition duration-300"
              onClick={() => {
                setShowSearch(false)
                setSearchQuery("")
              }}
            />
          ) : (
            <FaSearch
              className="text-gray-700 hover:text-[#c16452] text-[20px] sm:text-2xl cursor-pointer transition duration-300"
              onClick={() => setShowSearch(true)}
            />
          )}
          {/* Shopping Bag Icon */}
          <Link to="/cart">
            <div className="relative">
              <FaShoppingBag className="text-gray-700 hover:text-[#c16452] text-[20px] sm:text-2xl transition duration-300" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-red-600 text-white text-[9px] sm:text-[11px] font-bold rounded-full px-[5px] py-[1px] shadow-md leading-none min-w-[16px] text-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      </div>
      {/* Search Bar */}
      {showSearch && (
        <div ref={searchRef} className="w-full bg-white px-4 py-3 shadow-md border-t border-pink-500 z-50">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full border border-pink-500 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
            />
            <FaSearch className="absolute right-3 top-2.5 text-pink-500" />
            {searchQuery && (
              <div className="absolute w-full mt-2 bg-white border border-pink-500 rounded-md shadow-md max-h-60 overflow-y-auto z-50">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <Link
                      to={`/product/${product.id}`}
                      key={product.id}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 text-sm text-gray-800"
                      onClick={() => {
                        setShowSearch(false)
                        setSearchQuery("")
                      }}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-10 h-10 object-cover rounded mr-3"
                      />
                      <p className="font-medium">{product.name}</p>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-500">No products found</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {/* Line Below */}
      <div className="hidden md:block h-[1px] bg-[#707173]"></div>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center bg-white shadow-md px-4 md:px-6">
        <ul className="flex space-x-6 py-2 text-[#707173] font-[Futura] text-[14px] leading-[21px]">
          <li>
            <Link to="/" className="hover:text-[#c16452] hover:underline">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-[#c16452] hover:underline">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/body-scurb" className="hover:text-[#c16452] hover:underline">
              BODY CARE
            </Link>
          </li>
          <li>
            <Link to="/lip-scurb" className="hover:text-[#c16452] hover:underline">
              LIP CARE
            </Link>
          </li>
          <li>
            <Link to="/gift-box" className="hover:text-[#c16452] hover:underline">
              GIFT BAG
            </Link>
          </li>
          <li>
            <Link to="/wholesale" className="hover:text-[#c16452] hover:underline">
              WHOLESALE
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-semibold">MENU</span>
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        <ul className="flex flex-col text-gray-700 font-medium px-6 text-lg">
          <li className="py-3 border-b">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="py-3 border-b">
            <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
              SHOP
            </Link>
          </li>
          <li className="py-3 border-b">
            <Link to="/body-scurb" onClick={() => setIsMobileMenuOpen(false)}>
               BODY CARE
            </Link>
          </li>
          <li className="py-3 border-b">
            <Link to="/lip-scurb" onClick={() => setIsMobileMenuOpen(false)}>
              LIP CARE
            </Link>
          </li>
          <li className="py-3 border-b">
            <Link to="/gift-box" onClick={() => setIsMobileMenuOpen(false)}>
              GIFT BAG
            </Link>
          </li>
          <li className="py-3 border-b">
            <Link to="/wholesale" onClick={() => setIsMobileMenuOpen(false)}>
              WHOLESALE
            </Link>
          </li>
        </ul>
      </div>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMobileMenuOpen(false)} />
      )}
    </nav>
  )
}

export default Navbar
