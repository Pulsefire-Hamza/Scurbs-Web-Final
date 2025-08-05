import React, { useState, useEffect, useRef } from "react";

const products = [
  { id: 81, name: "HELLOSDESFS", price: "2500", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamp%20(1).jpeg" },
  { id: 82, name: "Luxury Flower Pillar Candle", price: "3000", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamp%20(2).jpeg" },
  { id: 83, name: "Iced Latte Candle", price: "2500", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamper%20(1).jpeg" },  
  { id: 84, name: "Iced Matcha Latte Candle", price: "2500", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamper%20(2).jpeg" },
  { id: 85, name: "Lavender Latte Candle", price: "2500", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamper%20(3).jpeg" },
  { id: 86, name: "Strawberry Matcha latte Candle", price: "2500", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/pamper%20(4).jpeg" },
  { id: 88, name: "Set of 2 Iced Matcha & Iced Latte", price: "400", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/chage%20(1).jpeg" },
  { id: 89, name: "Set of 2 Iced Matcha & Iced Latte", price: "400", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/GiftBOX/GIFTBOX%20(13).jpeg" },
  { id: 90, name: "Set of 2 Iced Matcha & Iced Latte", price: "400", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/chage%20(3).jpeg" },
  { id: 91, name: "Set of 2 Iced Matcha & Iced Latte", price: "400", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/8ecda70a-d24a-440b-9e3f-6989a5de5206.jpeg" },
  { id: 91, name: "Set of 2 Iced Matcha & Iced Latte", price: "400", image: "https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/Rosi%20&%20Bubblie/0f606981-5adc-405a-b07a-49a14313a0ff.jpeg" },

];

const ScentsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);
  const totalSlides = Math.ceil(products.length / itemsPerSlide);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(2); // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // tablet
      } else {
        setItemsPerSlide(3); // desktop
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerSlide >= products.length ? 0 : prevIndex + itemsPerSlide
      );
    }, 2000);

    return () => clearInterval(intervalRef.current);
  }, [itemsPerSlide, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="bg-white py-10">
      <div className="text-center mb-12">
        <h2 className="text-[36px] leading-[50px] font-pacifico text-black tracking-wider mt-3">
          Pamper Your Skin
        </h2>
      </div>
      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex / itemsPerSlide) * 100}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 text-center px-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto rounded-lg shadow-lg w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Bullets for mobile */}
       {/* Bullets for mobile */}
<div className="sm:hidden flex justify-center mt-4 space-x-2">
  {Array.from({ length: totalSlides }).map((_, i) => (
    <button
      key={i}
      className={`h-2 w-2 rounded-full ${
        i === Math.floor(currentIndex / itemsPerSlide)
          ? "bg-pink-500"
          : "bg-pink-200"
      }`}
      onClick={() => setCurrentIndex(i * itemsPerSlide)}
    ></button>
  ))}
</div>

      </div>
    </div>
  );
};

export default ScentsSection;
