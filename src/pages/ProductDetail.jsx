"use client"
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useCart } from "../pages/CartContext/"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: "Gift Bag",
      price: "200",
      description: `
        <strong>Description:</strong> Make your gift extra special with our elegant Gift Bag. Perfect for any occasion, it adds a thoughtful and stylish touch to your order.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(8).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(13).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(15).jpeg",
      ],
    },
    {
      id: 2,
      name: "Caramel Latte Lip Scrub",
      weight: "Quantity :20g",
      price: "450",
      description: `
        <strong>Description:</strong>Treat your lips to the ultimate coffeehouse experience with our Caramel Latte Lip Scrub. This gentle exfoliator buffs away dryness using fine sugar crystals, while nourishing ingredients like shea butter and apricot kernel oil leave your lips irresistibly soft and smooth. Infused with the sweet aroma of caramel and a touch of coffee flavor, it's a deliciously effective way to pamper your pout.
        Ingredients: Sugar, Shea Butter, Apricot Kernel Oil, Flavour, Preservative
        <strong>Directions to Use:</strong>Take a small amount and gently massage onto clean lips in circular motions for 1–2 minutes. Rinse off or wipe with a damp cloth. Use 2–3 times a week for best results. Follow with a lip balm to lock in moisture
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(6).jpeg",
      ],
      isOutOfStock: true,
    },
    {
      id: 3,
      name: "Bubblegum Lip Scrub",
      weight: "Quantity :20g",
      price: "450",
      description: `
        <strong>Description:</strong>Bring back sweet childhood memories with our Bubblegum Lip Scrub. This fun and flavorful exfoliator gently removes dry, flaky skin using fine sugar crystals, while nourishing shea butter and apricot kernel oil leave your lips feeling soft, smooth, and hydrated. Bursting with the playful scent of classic bubblegum, it's the perfect treat for your lips.
        Ingredients: Sugar, Shea Butter, Apricot Kernel Oil, Flavour, Preservative
        <strong>Directions to Use:</strong>Take a small amount and gently massage onto clean lips in circular motions for 1–2 minutes. Rinse off or wipe with a damp cloth. Use 2–3 times a week for best results. Follow with a lip balm to lock in moisture.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(8).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(9).jpeg",
      ],
      isOutOfStock: true,
    },
    {
      id: 4,
      name: "Coconut Dream Foaming Body Scrub",
      weight: "Quantity :400g",
      price: "1650 ",
      description: `
        <strong>Description:</strong> Coconut Dream Foaming Body Scrub is your skin's new tropical treat. This luscious, whipped formula gently exfoliates with sugar crystals while transforming into a rich, creamy lather that cleanses and nourishes. Infused with the sweet scent of coconut and a blend of skin-loving oils and butters, it leaves your body feeling silky-smooth, refreshed, and smelling like a dream island escape.
        <strong>Ingredients:</strong> Sucrose (sugar), Cocamidopropyl Betaine, Sunflower Oil, Jojoba Oil, Mango Butter, Fragrance Oil, Preservative.
        <strong>Key Benefits:</strong> Gently exfoliates to remove dead skin cells
          • Foams into a creamy lather for a luxurious cleanse
          • Nourishes and moisturizes with sunflower and jojoba oils
          • Mango butter adds an extra boost of hydration
        <strong>Directions to Use:</strong> Scoop a small amount and apply to damp skin. Gently massage in circular motions to exfoliate and cleanse. Rinse thoroughly. Use 2–3 times per week, or as desired.
        <strong>Shelf Life:</strong> 6 months | Store in a cool, dry place | Avoid introducing water into the jar.
        <strong>Note</strong> For external use only. Not intended for facial use. This product is formulated for the body.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(7).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(6).jpeg",
      ],
    },
    {
      id: 5,
      name: "Vanilla Soufflé Foaming Body Scrub",
      weight: "Quantity :400g",
      price: "1650 ",
      description: `
        <strong>Description:</strong> Vanilla Soufflé Foaming Body Scrub is your go-to for soft, pampered skin with a warm, comforting twist. This whipped, creamy formula gently exfoliates with fine sugar crystals while foaming into a rich lather that cleanses and nourishes. Infused with a cozy vanilla scent and a luxurious blend of oils and butters, it leaves your skin feeling smooth, moisturized, and wrapped in warmth.
        <strong>Ingredients:</strong> Sucrose (sugar), Cocamidopropyl Betaine, Sunflower Oil, Jojoba Oil, Mango Butter, Fragrance Oil, Preservative
        <strong>Key Benefits:</strong> Gently exfoliates to remove dead skin cells
          • Foams into a rich, creamy lather for deep cleansing
          • Nourishes and moisturizes with sunflower and jojoba oils
          • Mango butter adds an extra boost of hydration
        <strong>Directions to Use:</strong> Scoop a small amount and apply to damp skin. Gently massage in circular motions to exfoliate and cleanse. Rinse thoroughly. Use 2–3 times per week, or as desired.
        <strong>Shelf Life:</strong> 6 months | Store in a cool, dry place | Avoid introducing water into the jar.
        <strong>Note</strong> For external use only. Not intended for facial use. Not intended for facial use. This product is formulated for the body.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/WhatsApp%20Image%202025-04-23%20at%206.41.27%20PM.jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(2).jpeg",
      ],
    },
    {
      id: 6,
      name: "Peppermint Crush Foaming Body Scrub",
      weight: "Quantity :400g",
      price: "1650 ",
      description: `
        <strong>Description:</strong>Peppermint Crush Foaming Body Scrub is your ultimate skin refreshment in a jar. This whipped, airy formula exfoliates with fine sugar crystals and transforms into a creamy, foaming lather that deeply cleanses and invigorates. Infused with a cool burst of peppermint and enriched with nourishing oils and mango butter, it leaves your skin feeling smooth, revitalized, and tingling with freshness.
        <strong>Ingredients:</strong>Sucrose (sugar), Cocamidopropyl Betaine, Sunflower Oil, Jojoba Oil, Mango Butter, Fragrance Oil, Preservative.
        <strong>Key Benefits:</strong> Exfoliates and polishes the skin with fine sugar crystals
          • Cleanses and refreshes with a rich, foamy lather• Enriched with peppermint for a cooling, revitalizing sensation• Hydrates and softens with sunflower oil, jojoba oil, and mango butter
        <strong>Directions to Use:</strong> Scoop a small amount and apply to damp skin. Gently massage in circular motions to exfoliate and cleanse. Rinse thoroughly. Use 2–3 times per week, or as desired.
        <strong>Shelf Life:</strong> 6 months | Store in a cool, dry place | Avoid introducing water into the jar.
        <strong>Note</strong> For external use only. Not intended for facial use. Not intended for facial use. This product is formulated for the body.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(7).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(6).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(3).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(4).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(6).jpeg",
      ],
    },
    {
      id: 7,
      name: "Pineapple Delight Foaming Body Scrub",
      weight: "Quantity :400g",
      price: "1650 ",
      description: `
        <strong>Description:</strong>Pineapple Delight Foaming Body Scrub is your tropical glow-up in a jar. This whipped, sugar-based formula exfoliates gently while transforming into a creamy foam that cleanses and nourishes. Bursting with the juicy, refreshing scent of ripe pineapple and packed with skin-loving oils and mango butter, it leaves your skin feeling soft, radiant, and deliciously smooth
        <strong>Ingredients:</strong>Sucrose (sugar), Cocamidopropyl Betaine, Sunflower Oil, Jojoba Oil, Mango Butter, Fragrance Oil, Preservative.
        <strong>Key Benefits:</strong> Gently exfoliates and buffs away dead skin cells• Cleanses with a rich, foaming lather• Infused with a fruity pineapple scent for a tropical vibe• Moisturizes and softens with jojoba, sunflower oil, and mango butter
        <strong>Directions to Use:</strong> Scoop a small amount and apply to damp skin. Gently massage in circular motions to exfoliate and cleanse. Rinse thoroughly. Use 2–3 times per week, or as desired.
        <strong>Shelf Life:</strong> 6 months | Store in a cool, dry place | Avoid introducing water into the jar.
        <strong>Note</strong> For external use only. Not intended for facial use. Not intended for facial use. This product is formulated for the body.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(5).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(1).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(2).jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(3).jpeg",
      ],
    },
    {
      id: 8,
      name: "Foaming Body Scrubs - Wholesale",
      weight: "Minimum: 15 jars", // Updated from "Quantity: 5kg"
      price: "12750", // Base price for 15 jars
      description: `
    <p>
      Our wholesale foaming body scrub jars are perfect for both private event gifting and small business resellers. 
      Each jar is filled with <strong>350g of luxurious whipped foaming scrub</strong>, available in a variety of scents 
      to match your vibe or brand.
    </p>
    <p><strong>Minimum Order: 15 jars</strong></p>
    <p><strong>Ideal for:</strong></p>
    <ul style="list-style-type: disc; margin-left:18px; color:#000;">
      <li>Bridal showers</li>
      <li>Mehndi favors</li>
      <li>Baby showers</li>
      <li>Birthday giveaways</li>
      <li>Mini party gifting</li>
    </ul>
    <p><strong>Small Business Wholesale:</strong></p>
    <ul style="list-style-type: disc; margin-left:18px; color:#000;">
      <li>Receive clean, unbranded jars ready for your own label or branding</li>
      <li>Perfect for those launching their own skincare line or adding to an existing one</li>
    </ul>
    <p><strong>Custom Stickers:</strong></p>
    <ul style="list-style-type: disc; margin-left:18px; color:#000;">
      <li>Available only for private event orders</li>
      <li>Add names, event dates, or theme designs (matte, gloss, or laminated options)</li>
      <li>Stickers are charged separately based on design and quantity</li>
    </ul>
  `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
      ],
    },

     {
      id: 9,
      name: " Rosie Aur Bubblie Lip Care Duo",
      price: "850 ",
      description: `
       A perfect combo for soft, hydrated, and naturally tinted lips! This bundle includes:

  •	Lip Balm (20g): Nourishing, non-sticky, and deeply moisturizing – ideal for daily lip care.

	•	Lip Tint (10ml): Lightweight, smooth formula that adds a natural flush of color to your lips while keeping them moisturized.

Ideal for everyday use, this bundle is your go-to for healthy, glowing lips with a touch of color.
      `,
      images: [
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/8ecda70a-d24a-440b-9e3f-6989a5de5206.jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/0f606981-5adc-405a-b07a-49a14313a0ff.jpeg",
        "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/5bae6b6c-dc01-4cf2-8b49-560360c842d0.jpeg",
      ],
    },
  ]

  const { addToCart } = useCart()
  const product = products.find((prod) => prod.id === Number.parseInt(id))
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const [isWithDupatta, setIsWithDupatta] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const displayRelatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  const [selectedJars, setSelectedJars] = useState(15)
  const [selectedScent, setSelectedScent] = useState("")

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  if (!product) {
    return <p>Product not found</p>
  }

  const openModal = (index) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const finalPrice =
    product.id === 8
      ? selectedJars <= 15
        ? Number.parseFloat(product.price) // Base price for 15 jars
        : Number.parseFloat(product.price) + (selectedJars - 15) * 850 // Additional 850 per jar after 15
      : Number.parseFloat(product.price)

  function getRandomImage(images) {
    const randomIndex = Math.floor(Math.random() * images.length)
    return images[randomIndex]
  }

  const isProductOutOfStock = product.isOutOfStock

  return (
    <div className="max-w-screen-xl mx-auto pt-36 md:pt-44 pb-20 px-4">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <div className="w-full">
            <img
              src={product.images[modalImageIndex] || "/placeholder.svg"}
              alt={`${product.name} Main Image`}
              className="w-[90%] max-w-[700px] h-auto mx-auto md:mx-0 md:w-[500px] md:h-[600px] object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(modalImageIndex)}
            />
          </div>
          <div className="flex gap-4 mt-4 overflow-x-auto">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image || "/placeholder.svg"}
                alt={`${product.name} Thumbnail ${index + 1}`}
                className="w-[100px] h-[100px] object-cover rounded-lg shadow-md cursor-pointer transition duration-200 ease-in-out hover:scale-105"
                onClick={() => setModalImageIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-0 rounded-none">
          <h1 className="text-[#232323] text-[30px] leading-[40px] text-left tracking-normal font-Pacifico">
            {product.name}
          </h1>
          {product.weight && (
            <p className="inline-block mt-2 px-3 py-1 text-sm leading-5 font-semibold text-[#232323] bg-[#ffe9ef] rounded-full shadow-sm">
              {product.weight.includes(":") ? product.weight.split(":")[1].trim() : product.weight}
            </p>
          )}
          <p className="text-[#F1628E] mt-2 text-[18px] font-josefin font-semibold">
            {new Intl.NumberFormat("en-PK").format(finalPrice)} PKR
          </p>
          {isProductOutOfStock && <p className="text-red-500 font-bold mt-2">Out of Stock</p>}

          {/* Quantity controls for all products (including ID 8) if not out of stock */}
          {!isProductOutOfStock && product.id !== 8 && (
  <div className="flex items-center mt-4">
    <p className="text-[#232323] font-josefin text-[14px] mr-2">Quantity:</p>
    <div className="flex items-center space-x-2">
      <button
        className="w-10 h-10 text-xl font-bold text-[#F1628E] border border-[#F1A7C3] rounded-full flex items-center justify-center bg-white hover:bg-[#F1A7C3] hover:text-white transition duration-200"
        onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
      >
        −
      </button>
      <div className="w-14 h-10 flex items-center justify-center text-[#232323] font-semibold border border-[#F1A7C3] rounded-full bg-transparent">
        {quantity}
      </div>
     <button
  className="w-10 h-10 text-xl font-bold text-[#F1628E] border border-[#F1A7C3] rounded-full flex items-center justify-center bg-white hover:bg-[#F1A7C3] hover:text-white transition duration-200"
  onClick={() => setQuantity((prev) => prev + 1)}
>
  +
</button>

    </div>
  </div>
)}

          {/* Special controls for product ID 8 */}
          {product.id === 8 && (
            <>
              <div className="flex items-center mt-4">
                <p className="text-[#232323] font-josefin text-[14px] mr-2">Select Jars:</p>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setSelectedJars((prev) => Math.max(prev - 1, 15))}
                    className={`w-10 h-10 text-xl font-bold text-[#F1628E] border border-[#F1A7C3] rounded-full flex items-center justify-center bg-white hover:bg-[#F1A7C3] hover:text-white transition duration-200 ${
                      selectedJars <= 15 ? "cursor-not-allowed opacity-50" : ""
                    }`}
                    disabled={selectedJars <= 15}
                  >
                    −
                  </button>
                  <div className="w-16 h-10 flex items-center justify-center text-[#232323] font-semibold border border-[#F1A7C3] rounded-full bg-transparent">
                    {selectedJars || 15} jars
                  </div>
                  <button
                    onClick={() => setSelectedJars((prev) => (prev || 15) + 1)}
                    className="w-10 h-10 text-xl font-bold text-[#F1628E] border border-[#F1A7C3] rounded-full flex items-center justify-center bg-white hover:bg-[#F1A7C3] hover:text-white transition duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

         

              <div className="mt-6 mb-6">
                <label className="block mb-4 text-[#232323] font-semibold text-lg">Select Scent:</label>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {[
                    "Vanilla",
                    "Mango",
                    "Strawberry",
                    "Peppermint",
                    "Pineapple",
                    "Coconut",
                    "Peach",
                    "Blueberry",
                    "Bubble Gum",
                    "Refreshing Flower",
                    "Jasmine",
                    "Irish Rose",
                    "Hot Chocolate",
                    "Caramel Toffee",
                    "Lava Coffee",
                  ].map((scent) => (
                    <button
                      key={scent}
                      onClick={() => setSelectedScent(scent)}
                      className={`px-3 py-1 text-xs sm:px-4 sm:py-2 rounded-full font-semibold transition-all duration-300 ease-in-out border-2
                        ${
                          selectedScent === scent
                            ? "bg-[#F1A7C3] text-[#232323] border-[#F1628E] shadow-lg transform scale-105"
                            : "bg-[#FFE9EF] text-[#232323] border-[#F1A7C3] hover:bg-[#F1A7C3] hover:text-white hover:shadow-lg"
                        }`}
                    >
                      {scent}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Add to Cart button for all products (including ID 8) */}
          {!isProductOutOfStock && (
            <button
              onClick={() => {
                const cartItem = {
                  id: product.id,
                  name: product.name,
                  price: finalPrice,
                  quantity,
                  image: product.images[0],
                  // Add special properties for product ID 8
                  ...(product.id === 8 && {
                    jars: selectedJars,
                    scent: selectedScent || "Default Scent",
                  }),
                }
                addToCart(cartItem)
                toast.success(`${product.name} has been added to your cart!`)
              }}
              className="block w-[80%] mt-5 py-2 text-[14px] font-medium text-center border-none rounded-full transition duration-300 bg-[#F1A7C3] text-[#232323] hover:bg-[#FF88A3] hover:text-white"
            >
              ADD TO CART
            </button>
          )}

          {/* Show out of stock message */}
          {isProductOutOfStock && (
            <button
              className="block w-[80%] mt-5 py-2 text-[14px] font-medium text-center border-none rounded-full transition duration-300 bg-gray-300 text-gray-500 cursor-not-allowed"
              disabled
            >
              OUT OF STOCK
            </button>
          )}

          <div className="mt-4">
            <p
              className="text-[#232323] font-josefin whitespace-pre-line md:text-[16px] md:leading-[1.5] text-[12px] leading-[1.4]"
              dangerouslySetInnerHTML={{
                __html: product.description.replace(/<strong>/g, '<strong style="color: #FF88A3;">'),
              }}
            />
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all"
          onClick={closeModal}
        >
          <div
            className="relative bg-transparent rounded-lg p-0 w-full max-w-full flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() =>
                setModalImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1))
              }
              className="absolute left-2 md:left-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Previous Image"
            >
              <span className="text-xl md:text-2xl">&#8592;</span>
            </button>
            <img
              src={product.images[modalImageIndex] || "/placeholder.svg"}
              alt="Product"
              className="w-full h-auto object-contain max-h-[90vh] rounded-lg mx-8 md:mx-12"
            />
            <button
              onClick={() =>
                setModalImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1))
              }
              className="absolute right-2 md:right-8 text-white bg-[#333] hover:bg-[#555] transition duration-300 rounded p-2 md:p-3 shadow-md"
              aria-label="Next Image"
            >
              <span className="text-xl md:text-2xl">&#8594;</span>
            </button>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-white text-xl md:text-2xl font-bold bg-[#333] hover:bg-[#555] transition duration-300 rounded p-1.5 md:p-2 shadow-md"
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      <div className="mt-16 w-full bg-white py-12 px-4">
        <h2
          className="text-3xl font-serif font-semibold text-gray-800 text-left mb-8"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "24px",
            lineHeight: "30px",
            textAlign: "left",
            letterSpacing: "normal",
            color: "#232323",
            backgroundColor: "#ffffff",
            opacity: 1,
          }}
        >
          RELATED PRODUCTS
        </h2>
        <div className="relative">
          <button
            onClick={prevPage}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-pink-300 text-white py-3 px-4 rounded-full border-2 border-pink-300 text-xl hover:bg-pink-400 hover:border-pink-400 hover:shadow-lg transition-all duration-300 hidden md:block z-10"
            style={{
              fontSize: "1.2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            &lt;
          </button>
          <div className="flex overflow-x-auto gap-6 py-4 px-6">
            {displayRelatedProducts.slice(0, 5).map((prod) => {
              const randomImage = getRandomImage(prod.images)
              return (
                <div
                  key={prod.id}
                  className="w-[250px] flex-shrink-0 group relative overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className="w-full h-[350px] relative">
                    <img
                      src={randomImage || "/placeholder.svg"}
                      alt={prod.name}
                      className="object-contain w-full h-full transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-110 group-hover:filter group-hover:blur-sm"
                      onClick={() => navigate(`/product/${prod.id}`)}
                    />
                    <img
                      src={prod.images[1] || "/placeholder.svg"}
                      alt={prod.name}
                      className="absolute inset-0 object-contain w-full h-full transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                      onClick={() => navigate(`/product/${prod.id}`)}
                    />
                  </div>
                  <h3
                    className="mt-4 text-center text-xl font-medium"
                    style={{
                      fontFamily: '"Josefin Sans", Arial, sans-serif',
                      fontSize: "12px",
                      lineHeight: "22px",
                      textAlign: "center",
                      letterSpacing: "normal",
                      color: "#FF88A3",
                    }}
                  >
                    {prod.name}
                  </h3>
                </div>
              )
            })}
          </div>
          <button
            onClick={nextPage}
            className="absolute right-[35px] top-1/2 transform -translate-y-1/2 bg-pink-300 text-white py-3 px-4 rounded-full border-2 border-pink-300 text-xl hover:bg-pink-400 hover:border-pink-400 hover:shadow-lg transition-all duration-300 hidden md:block z-10"
            style={{
              fontSize: "1.2rem",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
