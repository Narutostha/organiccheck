import React from "react";
import FlashSaleSection from "../components/FlashSaleSection";
import PromotionsSection from "../components/PromotionSection";
import { flashSaleProducts } from "../assets/data/product";
import { promotions } from "../assets/data/promotions";



const Sales = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&family=Sen:wght@700&family=Inter:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <main>
          <div className="px-[100px] py-10 max-md:px-8 max-sm:px-4">
            <FlashSaleSection products={flashSaleProducts} />
            <PromotionsSection promotions={promotions} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Sales;
