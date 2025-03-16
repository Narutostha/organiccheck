import React from "react";



const PromotionCard = ({ promotion }) => {
  return (
    <div className="relative cursor-pointer">
      <img
        src={promotion.image}
        alt={promotion.title}
        className="w-full h-[210px] object-cover rounded-xl"
      />
      <div className="absolute text-white left-5 bottom-5">
        <div className="text-[#C81414] text-2xl font-extrabold">
          {promotion.title}
        </div>
        <div>
          <span>{promotion.subtitle}</span>
          <span className="text-[#F6AE07] text-[32px] font-extrabold">
            {promotion.discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
