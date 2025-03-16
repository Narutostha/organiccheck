import React from "react";
// import PromoBar from "./PromoBar";

import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import BreadcrumbCheckout from "../components/checkout/BreadcrumbCheckout";

const CheckoutPage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      {/* <PromoBar /> */}
      <main className="max-w-[1200px] mx-auto my-10 px-5 py-0">
        <BreadcrumbCheckout/>
        <h1 className="text-[40px] text-[rgba(36,36,36,0.95)] mb-10">
          Checkout
        </h1>
        <div className="flex gap-10 max-md:flex-col">
          <CheckoutForm />
          <OrderSummary />
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;
