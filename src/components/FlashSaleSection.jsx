import React from "react";

import ProductCard from "./ProductCard";
import CountdownTimer from "./CountdownTimer";

const FlashSaleSection = ({ products }) => {
  return (
    <section className="mt-10">
      <div className="text-4xl font-semibold flex items-center gap-2.5">
        <span>Flash Sales</span>
        <div>
          <svg
            width="33"
            height="40"
            viewBox="0 0 33 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_624_695)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.2198 0.0860887C19.7014 0.279548 19.9798 0.757027 19.8936 1.2421L17.8414 12.8H27.8635C28.294 12.8 28.6876 13.0283 28.8801 13.3897C29.0724 13.751 29.0311 14.1835 28.7726 14.5067L15.1364 31.5734C14.822 31.9668 14.2619 32.1074 13.7802 31.9139C13.2986 31.7206 13.0203 31.2429 13.1064 30.758L15.1586 19.2H5.13637C4.70596 19.2 4.31246 18.9717 4.11998 18.6104C3.92748 18.249 3.96903 17.8166 4.22728 17.4934L17.8636 0.426746C18.178 0.0333345 18.7381 -0.107371 19.2198 0.0860887ZM7.40911 17.0667H16.5C16.834 17.0667 17.1512 17.2046 17.3671 17.4439C17.583 17.6831 17.6758 17.9994 17.6209 18.3087L16.1143 26.7939L25.5908 14.9334H16.5C16.166 14.9334 15.8489 14.7954 15.6329 14.5562C15.417 14.3169 15.3242 14.0006 15.3791 13.6913L16.8857 5.20624L7.40911 17.0667Z"
                fill="#F6E607"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_624_695"
                x="0"
                y="0"
                width="33"
                height="40"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.964706 0 0 0 0 0.901961 0 0 0 0 0.027451 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_624_695"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_624_695"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex justify-between items-center border bg-[#F7FFF8] mx-0 my-5 p-[15px] rounded-[5px] border-solid border-[#D9D9D9] max-sm:flex-col max-sm:gap-2.5">
        <div className="flex items-center gap-2.5 text-base">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_624_696)">
                <path
                  d="M13.3335 13.3333V2.5H0.833496V13.3333H13.3335ZM13.3335 13.3333H19.1668V9.16667L16.6668 6.66667H13.3335L13.3335 13.3333ZM6.66683 15.4167C6.66683 16.5673 5.73409 17.5 4.5835 17.5C3.4329 17.5 2.50016 16.5673 2.50016 15.4167C2.50016 14.2661 3.4329 13.3333 4.5835 13.3333C5.73409 13.3333 6.66683 14.2661 6.66683 15.4167ZM17.5002 15.4167C17.5002 16.5673 16.5674 17.5 15.4168 17.5C14.2662 17.5 13.3335 16.5673 13.3335 15.4167C13.3335 14.2661 14.2662 13.3333 15.4168 13.3333C16.5674 13.3333 17.5002 14.2661 17.5002 15.4167Z"
                  stroke="#FF3B30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_624_696">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span>Any 4 items for Free Shipping</span>
        </div>
        <div className="flex items-center gap-2.5 text-base">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_624_698)">
                <path
                  d="M16.6665 9.99984V18.3332H3.33317V9.99984M9.99984 18.3332V5.83317M9.99984 5.83317H6.24984C5.6973 5.83317 5.1674 5.61368 4.7767 5.22298C4.386 4.83228 4.1665 4.30237 4.1665 3.74984C4.1665 3.1973 4.386 2.6674 4.7767 2.2767C5.1674 1.886 5.6973 1.6665 6.24984 1.6665C9.1665 1.6665 9.99984 5.83317 9.99984 5.83317ZM9.99984 5.83317H13.7498C14.3024 5.83317 14.8323 5.61368 15.223 5.22298C15.6137 4.83228 15.8332 4.30237 15.8332 3.74984C15.8332 3.1973 15.6137 2.6674 15.223 2.2767C14.8323 1.886 14.3024 1.6665 13.7498 1.6665C10.8332 1.6665 9.99984 5.83317 9.99984 5.83317ZM1.6665 5.83317H18.3332V9.99984H1.6665V5.83317Z"
                  stroke="#FF3B30"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_624_698">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <span>14 Days Free Return</span>
        </div>
        <CountdownTimer />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center text-[#C81414] text-3xl font-semibold">
          <span>20% OFF ON THESE ITEMS</span>
          <div className="text-white text-[13px] flex items-center gap-2.5 bg-[#286847] px-[15px] py-[5px] cursor-pointer">
            <span>See More</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 108 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-icon"
            >
              <path
                d="M89.8947 9L97 14.1429M97 14.1429L89.8947 18M97 14.1429H82"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(4,1fr)] gap-5 mt-5 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleSection;
