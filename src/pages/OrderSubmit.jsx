import React from "react";

const OrderSubmit = () => {
  return (
    <div className="px-4 pt-5 sm:px-6 md:px-8 lg:px-16">
      <div className="bg-white p-2 sm:p-4 text-xs sm:text-sm text-gray-500 pt-4 overflow-x-auto">
        <div className="container mx-auto">
          <div className="flex items-center">
            <a href="/" className="hover:text-gray-700 whitespace-nowrap">
              Home
            </a>
            <span className="mx-1 sm:mx-2">{">"}</span>
            <a href="/cart" className="hover:text-gray-700 whitespace-nowrap">
              Cart
            </a>
            <span className="mx-1 sm:mx-2">{">"}</span>
            <a
              href="/checkout"
              className="hover:text-gray-700 whitespace-nowrap"
            >
              Checkout
            </a>
            <span className="mx-1 sm:mx-2">{">"}</span>
            <span className="text-gray-900 whitespace-nowrap">
              Review/Submit order
            </span>
          </div>
        </div>
      </div>

      <main className="flex-grow bg-white">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
          <div className="text-center mb-4 sm:mb-8">
            <p className="text-darkGreen font-semibold text-sm sm:text-base">
              You are about to complete your order. Please verify all details
              and click to Confirm Order.
            </p>
          </div>

          <div className="mb-4 sm:mb-8 w-full">
            <h2 className="text-lg sm:text-xl mb-2 sm:mb-4 font-sans">
              Shipping Information
            </h2>
            <div className="bg-lightGreen border w-full border-gray-200 rounded-lg p-3 sm:pl-6 sm:py-3">
              <div className="text-xs sm:text-sm w-full sm:w-1/2 md:w-1/3">
                <div className="grid grid-cols-2 gap-1 mb-1">
                  <p className="font-sans font-medium">SHIP TO NAME:</p>
                  <p className="font-sans">John Wills</p>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-1">
                  <p className="font-sans font-medium">SHIPPING ADDRESS:</p>
                  <p className="">Sora Marg, Kalanki, Kathmandu</p>
                </div>
                <div className="grid grid-cols-2 gap-1 mb-1">
                  <p className="font-sans font-medium">EMAIL:</p>
                  <p className="font-sans">hema12@gmail.com</p>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  <p className="font-sans font-medium">PHONE NUMBER:</p>
                  <p className="font-sans">9876543200</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4 sm:mb-8">
            <button className="bg-darkGreen text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              EDIT CART
            </button>
            <button className="bg-darkGreen text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              EDIT PAYMENT
            </button>
            <button className="bg-gray-400 text-black px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm">
              CANCEL ORDER
            </button>
            <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <button className="bg-brightGreen text-white px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm w-full sm:w-auto">
                CONFIRM ORDER &gt;
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              Your Order
            </h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="hidden sm:grid grid-cols-5 bg-green-50 p-3 border-b">
                <div className="font-bold text-sm">PRODUCT</div>
                <div className="font-bold text-center text-sm">ACTIONS</div>
                <div className="font-bold text-center text-sm">QUANTITY</div>
                <div className="font-bold text-center text-sm">
                  PRODUCT VALUE
                </div>
                <div className="font-bold text-right text-sm">TOTAL AMOUNT</div>
              </div>

              <div className="sm:hidden">
                <div className="border-b p-3">
                  <div className="flex items-center mb-2">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Short Sleeve Tee"
                      className="w-12 h-12 mr-2"
                    />
                    <span className="text-sm">Hemp Short Sleeve Tee</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Quantity:</div>
                    <div className="text-right">01</div>
                    <div>Price:</div>
                    <div className="text-right">Rs.1,999</div>
                    <div>Total:</div>
                    <div className="text-right font-bold">Rs.1,999</div>
                    <div className="col-span-2 flex justify-end space-x-2 mt-1">
                      <button className="text-blue-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button className="text-red-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product 2 */}
                <div className="border-b p-3">
                  <div className="flex items-center mb-2">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Short Sleeve Tee"
                      className="w-12 h-12 mr-2"
                    />
                    <span className="text-sm">Hemp Short Sleeve Tee</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Quantity:</div>
                    <div className="text-right">03</div>
                    <div>Price:</div>
                    <div className="text-right">Rs.1,999</div>
                    <div>Total:</div>
                    <div className="text-right font-bold">Rs.5,997</div>
                    <div className="col-span-2 flex justify-end space-x-2 mt-1">
                      <button className="text-blue-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button className="text-red-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-b p-3">
                  <div className="flex items-center mb-2">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Long Sleeve Tee"
                      className="w-12 h-12 mr-2"
                    />
                    <span className="text-sm">Hemp Long Sleeve Tee</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Quantity:</div>
                    <div className="text-right">02</div>
                    <div>Price:</div>
                    <div className="text-right">Rs.2,499</div>
                    <div>Total:</div>
                    <div className="text-right font-bold">Rs.4,998</div>
                    <div className="col-span-2 flex justify-end space-x-2 mt-1">
                      <button className="text-blue-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      <button className="text-red-500">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="grid grid-cols-5 items-center p-3 border-b">
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Short Sleeve Tee"
                      className="w-12 h-12 md:w-16 md:h-16 mr-2"
                    />
                    <span className="text-xs md:text-sm">
                      Hemp Short Sleeve Tee
                    </span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <button className="text-blue-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="text-red-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center text-xs md:text-sm">01</div>
                  <div className="text-center text-xs md:text-sm">Rs.1,999</div>
                  <div className="text-right text-xs md:text-sm">Rs.1,999</div>
                </div>

                <div className="grid grid-cols-5 items-center p-3 border-b">
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Short Sleeve Tee"
                      className="w-12 h-12 md:w-16 md:h-16 mr-2"
                    />
                    <span className="text-xs md:text-sm">
                      Hemp Short Sleeve Tee
                    </span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <button className="text-blue-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="text-red-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center text-xs md:text-sm">03</div>
                  <div className="text-center text-xs md:text-sm">Rs.1,999</div>
                  <div className="text-right text-xs md:text-sm">Rs.5,997</div>
                </div>

                <div className="grid grid-cols-5 items-center p-3 border-b">
                  <div className="flex items-center">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Hemp Long Sleeve Tee"
                      className="w-12 h-12 md:w-16 md:h-16 mr-2"
                    />
                    <span className="text-xs md:text-sm">
                      Hemp Long Sleeve Tee
                    </span>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <button className="text-blue-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    <button className="text-red-500">
                      <svg
                        className="w-4 h-4 md:w-5 md:h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-center text-xs md:text-sm">02</div>
                  <div className="text-center text-xs md:text-sm">Rs.2,499</div>
                  <div className="text-right text-xs md:text-sm">Rs.4,998</div>
                </div>
              </div>

              <div className="border-t bg-lightGreen">
                <div className="grid grid-cols-2 p-3 border-b-4 border-dotted border-grey/70">
                  <div className="font-bold text-xs sm:text-sm">Subtotal</div>
                  <div className="text-right text-xs sm:text-sm">Rs.12,994</div>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-4 border-grey/70 border-dotted text-red-600">
                  <div className="text-xs sm:text-sm">Discount (-35%)</div>
                  <div className="text-right text-xs sm:text-sm">
                    Rs.4,547.9
                  </div>
                </div>
                <div className="grid grid-cols-2 p-3 border-b-4 border-dotted border-grey/70">
                  <div className="text-xs sm:text-sm">Delivery Fee</div>
                  <div className="text-right text-xs sm:text-sm">Rs.200</div>
                </div>
                <div className="grid grid-cols-2 p-3 font-bold">
                  <div className="text-sm sm:text-base">ORDER TOTAL</div>
                  <div className="text-right text-sm sm:text-base">
                    Rs.8,646.1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderSubmit;
