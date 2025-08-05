import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 4,
    name: "Coconut Dream Foaming Body Scrub",
    price: "Rs 1650",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(5).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/cocunut%20(3).jpeg",
  },
  {
    id: 5,
    name: "Vanilla Soufflé Foaming Body Scrub",
    price: "Rs 1650",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(2).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/vanika%20(1).jpeg",
  },
  {
    id: 6,
    name: "Peppermint Crush Foaming Body Scrub",
    price: "Rs 1650",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(4).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/mint%20(1).jpeg",
  },
  {
    id: 7,
    name: "Pineapple Delight Foaming Body Scrub",
    price: "Rs 1650",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(3).jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/pineaple%20(1).jpeg",
  },
  {
    id: 8,
    name: "Foaming Body Scrubs - Wholesale",
    price: "Rs 12,750 ",
    image1:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
    image2:
      "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/BODYSCURB/Foaming%20Body%20Scrubs%20-%20Wholesale.jpeg",
  },
];

const BodyScurb = () => {
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
       Body Care
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
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

export default BodyScurb;
