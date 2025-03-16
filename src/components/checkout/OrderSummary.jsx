import { useState } from "react";

const OrderSummary= () => {
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setIsPromoApplied(true);
      // In a real app, you would validate the promo code with an API
    }
  };

  return (
    <div className="order-[summary] flex-1 shadow-[0_2px_4px_rgba(0,0,0,0.1)] bg-white p-[30px] rounded-lg max-md:w-full">
      <h2 className="text-2xl mb-[30px]">Order summary</h2>
      <div>
        <div className="flex justify-between mb-5">
          <span>Products 1</span>
          <span>× 1 Pieces</span>
          <span>$ 3,204.00</span>
        </div>
      </div>
      <div className="flex gap-2.5 mb-[30px]">
        <input
          type="text"
          placeholder="Promo code"
          className="border rounded text-base w-full p-3 border-solid border-[#ccc]"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button
          className="text-white rounded cursor-pointer bg-[#1A432E] px-5 py-2 border-[none]"
          onClick={handleApplyPromo}
        >
          Apply
        </button>
      </div>
      <div className="pt-5 border-t-[#eee] border-t border-solid">
        <div className="flex justify-between mb-2.5">
          <span>Overall total</span>
          <span>$ 3,204.00</span>
        </div>
        <p className="text-sm text-[#666]">
          Final charge may differ due to proration, credit refunds, or local
          taxes.
        </p>
      </div>
      <div className="mt-5 px-0 py-5 border-t-[#eee] border-t border-solid">
        <div className="flex justify-between mb-2">
          <span>Today's total</span>
          <span>$ 3,204.00</span>
        </div>
        <div className="flex justify-between">
          <span>No payment method</span>
          <span>-$3,204.00</span>
        </div>
      </div>
      <button className="w-full text-white rounded text-base cursor-pointer bg-[#1A432E] mt-5 p-[15px] border-[none]">
        Save and pay now
      </button>
    </div>
  );
};

export default OrderSummary;
