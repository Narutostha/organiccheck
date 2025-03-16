import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const BreadcrumbCheckout = () => {
  return (
    <div className="flex items-center gap-2 max-sm:flex-wrap">
      <Link to="/home" className="text-[#969191]">
        Home
      </Link>
      <div className="items-center flex justify-center">
        {" "}
        <IoIosArrowForward />
      </div>

      <Link to="/cart" className="text-[#969191] text-base no-underline">
        Cart
      </Link>
      <IoIosArrowForward />
      <span className="text-black">Checkout</span>
    </div>
  );
};

export default BreadcrumbCheckout;
