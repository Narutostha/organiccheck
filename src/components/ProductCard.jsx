import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
   
    setTimeout(() => {
      setIsAddingToCart(false);
      console.log(`Added ${product.name} to cart`);
    }, 500);
  };

  return (
    <div className="border bg-[#F7FFF8] p-[15px] rounded-[9px] border-solid border-[#E0E0E0]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-[7px]"
      />
      <div className="text-[#333] text-lg font-bold mx-0 my-[15px]">
        {product.description}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[#2D5A27] text-xl font-bold">
            Rs.{product.currentPrice}
          </div>
          <div className="text-[#969191] text-lg line-through">
            Rs.{product.originalPrice}
          </div>
        </div>
        <button
          className={`text-white cursor-pointer bg-[#286847] px-5 py-2.5 rounded-[5px] border-[none] transition-all ${
            isAddingToCart ? "opacity-75" : ""
          }`}
          onClick={handleAddToCart}
          disabled={isAddingToCart}
        >
          {isAddingToCart ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
