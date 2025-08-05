import React, { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 2,
    name: "Caramel Latte Lip Scrub",
    price: "Rs 450",
    category: "Lip Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(3).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/BROWN%20LIP%20(6).jpeg",
    inStock: false, // ❌ Out of Stock
  },
  {
    id: 3,
    name: "Bubblegum Lip Scrub",
    price: "Rs 450",
    category: "Lip Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(8).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/LIPSCURB/PINK%20LIP%20(1).jpeg",
    inStock: false, // ❌ Out of Stock
  },
  {
    id: 4,
    name: "Coconut Dream Foaming Body Scrub",
    price: "Rs 1650",
    category: "Body Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(5).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(3).jpeg",
    inStock: true,
  },
  {
    id: 5,
    name: "Vanilla Soufflé Foaming Body Scrub",
    price: "Rs 1650",
    category: "Body Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(2).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(1).jpeg",
    inStock: true,
  },
  {
    id: 6,
    name: "Peppermint Crush Foaming Body Scrub",
    price: "Rs 1650",
    category: "Body Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(4).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(1).jpeg",
    inStock: true,
  },
  {
    id: 7,
    name: "Pineapple Delight Foaming Body Scrub",
    price: "Rs 1650",
    category: "Body Care",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(3).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(1).jpeg",
    inStock: true,
  },
  {
    id: 1,
    name: "Gift Bag",
    price: "Rs 200",
    category: "Gift Bag",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(8).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(13).jpeg",
    inStock: true,
  },
  {
    id: 8,
    name: "Foaming Body Scrubs - Wholesale",
    price: "Rs 12,750 ",
    category: "Whole Sale",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
    inStock: true,
  },
   {
    id: 9,
    name: " Rosie Aur Bubblie Lip Care Duo",
    price: "Rs 850",
    image1:
             "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/8ecda70a-d24a-440b-9e3f-6989a5de5206.jpeg",

    image2:
           "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/0f606981-5adc-405a-b07a-49a14313a0ff.jpeg",
               category: "Lip Care",
                   inStock: true,


  },
];

const categories = ["All", "Lip Care", "Body Care", "Gift Bag","Whole Sale"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto p-4">
      <h1
        className="text-center text-3xl font-semibold mb-10 pt-20 md:pt-40"
        style={{
          fontFamily: '"ITC Galliard", serif',
          fontSize: "27px",
          lineHeight: "32.4px",
          fontWeight: "400",
          color: "#171717",
        }}
      >
        Shop by Category
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium rounded-md border border-[#f1628e] text-[#f1628e] hover:bg-[#fbd6df] transition duration-300 transform ${
              category === selectedCategory ? "bg-[#fbd6df]" : ""
            }`}
            style={{
              fontFamily: "Pacifico, cursive",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="block">
            <div className="relative w-full aspect-[4/5] overflow-hidden group rounded-xl shadow-md bg-[#fff0f5] hover:bg-[#fbd6df] transition duration-300">
              <img
                src={product.image1}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-xl"
              />
              <img
                src={product.image2}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-xl"
              />

              {/* Out of Stock Badge */}
              {!product.inStock && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Out of Stock
                </span>
              )}
            </div>
            <div className="text-center mt-3">
              <h3 className="font-[Futura] text-[14px] leading-[22.4px] text-[#707173]">
                {product.name}
              </h3>
              <p className="font-[Futura] text-[14px] leading-[22.4px] text-[#F1628E]">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
