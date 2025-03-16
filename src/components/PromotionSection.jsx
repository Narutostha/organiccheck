import React from "react";
import PromotionCard from "./PromotionsSection";


const PromotionsSection = ({ promotions }) => {
  return (
    <section className="px-[100px] py-10">
      <div className="text-[#C81414] text-3xl font-semibold">
        Today's Promotions
      </div>
      <div className="text-[#969191] text-xl mt-2.5">
        Get the best offers now.
      </div>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-5 mt-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {promotions.map((promotion) => (
          <PromotionCard key={promotion.id} promotion={promotion} />
        ))}
      </div>
    </section>
  );
};

export default PromotionsSection;
