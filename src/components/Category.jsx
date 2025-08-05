import React from 'react';
import { Link } from 'react-router-dom'; // 🔥 important

const categories = [
  {
    id: 1,
    image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/scurb%20cat.jpeg',
    title: 'Body Care',
    link: 'body-scurb',
  },
  {
    id: 2,
    image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/lip%20cat.jpeg',
    title: 'Lip Care',
    link: 'lip-scurb',
  },
  {
    id: 3,
    image: 'https://dataofclient.nyc3.cdn.digitaloceanspaces.com/HoorabsBakery/MAIN-PAGE-CONTENT/gift%20cat.jpeg',
    title: 'Gift Bag',
    link: '/gift-box',
  },
  
];

const Category = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-[36px] leading-[50px] font-pacifico text-black tracking-wider mt-3">
          Our Collection
        </h2>
      </div>

      {/* Mobile View */}
      <div className="md:hidden grid grid-cols-2 gap-6">
        {categories.slice(0, 2).map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            <Link to={cat.link}>
              <div className="relative w-48 h-48 overflow-hidden bg-pink-500 rounded-full shadow-lg cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="mt-4 text-xl font-normal text-[#F1628E] font-josefin">
              {cat.title}
            </p>
          </div>
        ))}

        {/* Centered category in the second row */}
        <div className="col-span-2 flex justify-center">
          <div key={categories[2].id} className="flex flex-col items-center">
            <Link to={categories[2].link}>
              <div className="relative w-48 h-48 overflow-hidden bg-pink-500 rounded-full shadow-lg cursor-pointer">
                <img
                  src={categories[2].image}
                  alt={categories[2].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="mt-4 text-xl font-normal text-[#F1628E] font-josefin">
              {categories[2].title}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center gap-16 mt-12">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center">
            <Link to={cat.link}>
              <div className="relative w-56 h-56 overflow-hidden bg-pink-500 rounded-full shadow-lg cursor-pointer">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <p className="mt-6 text-2xl font-normal text-[#F1628E] font-josefin">
              {cat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
