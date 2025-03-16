import React from "react";
import PaymentMethods from "./PaymentMethods";
import CreditCardForm from "./CreditCardForm";
import BillingForm from "./BillingForm";

const CheckoutForm= () => {
  return (
    <div className="flex-[2] max-md:w-full ">
      <PaymentMethods/>
      <form
        className="flex flex-col gap-2"
        onSubmit={(e) => e.preventDefault()}
      >
        <CreditCardForm />
        <BillingForm />
        <div className="text-sm text-[#666]">
          <span>By continuing, I agree with the </span>
          <a href="#" className="text-[#1A432E] no-underline">
            Payment Policy
          </a>
          <span>
            {" "}
            and understand that my subscription will renew automatically at the
            end of term unless I cancel it.
          </span>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
