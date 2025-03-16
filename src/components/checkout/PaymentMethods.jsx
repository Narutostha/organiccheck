import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { LiaCcApplePay } from "react-icons/lia";
import { FaCcStripe } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";


const PaymentMethods= () => {
  return (
    <div className="flex justify-between mb-[30px]">
      <div className="flex gap-5 items-center">
        {/* <img src="visa.png" alt="Visa" className="h-10" /> */}
        <FaCcVisa size={40} />
        <FaCcMastercard size={40} />
        <LiaCcApplePay size={50} />
      </div>
      <div className="flex gap-5 items-center">
        <FaCcStripe size={40}/>
        <FaCcPaypal size={40}/>

      </div>
    </div>
  );
};

export default PaymentMethods;
