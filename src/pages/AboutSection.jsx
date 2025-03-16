import React from "react";

const AboutSection = () => {
  return (
    <section className="relative px-[188px] py-10 max-md:p-5">
      <h1 className="text-[#01330A] text-[32px] font-bold text-center mb-10 max-sm:text-2xl">
        About Organic Fiber
      </h1>

      <div className="text-black text-base leading-[1.6] mb-10 max-sm:text-sm">
        <p className="mb-5">
          Welcome to Organic Fiber, where sustainability meets style. We are a
          forward-thinking brand dedicated to creating eco-conscious products
          that inspire a greener, more mindful way of living. From beautifully
          crafted hemp bags and versatile clothing to everyday essentials, we
          are here to prove that sustainability and sophistication can coexist.
        </p>
        <p className="mb-5">
          At the core of our brand is hemp—a remarkable, renewable fiber
          celebrated for its strength, breathability, and minimal environmental
          footprint. Sourced from trusted organic farms and crafted with
          precision, every product we create is designed to be durable,
          timeless, and kind to the planet. We believe that what you wear and
          use every day should not only look good but also do good.
        </p>
        <p className="mb-5">
          Our commitment to sustainability goes beyond materials. We partner
          with skilled artisans and ethical manufacturers who share our values,
          ensuring that every piece is made with care, integrity, and respect
          for both people and the environment. Our collections are thoughtfully
          designed to be versatile, inclusive, and adaptable, catering to
          individuals who value quality, style, and sustainability.
        </p>
        <p className="mb-5">
          When you choose Organic Fiber, you're choosing more than just a
          product—you're choosing a lifestyle. A lifestyle that prioritizes the
          planet, embraces innovation, and celebrates the art of living
          consciously.
        </p>
      </div>

      <h2 className="text-[#01330A] text-2xl font-bold mb-5 max-sm:text-xl">
        Go Organic. Stay Classy.
      </h2>

      <div className="text-black text-base leading-[1.6] mb-10 max-sm:text-sm">
        <p className="mb-5">
          This is our promise to you. It's a call to action—a reminder that
          every choice we make has an impact. Together, we can redefine what it
          means to live sustainably, one hemp product at a time.
        </p>
        <p className="mb-5">
          Join us on this journey. Explore our collections, embrace the beauty
          of hemp, and become part of a community that believes in a brighter,
          greener future.
        </p>
        <p className="mb-5">
          Welcome to Organic Fiber—where sustainability is always in style.
        </p>
      </div>

      {/* Decorative leaf images */}
      <div className="decorative-elements">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/912bc62f2c867edb37a5a3d6a2f5bf4f3e58d709"
          alt=""
          className="absolute opacity-40 w-[221px] h-[206px] left-0 top-[710px] max-sm:hidden"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e029ead34ab0a8052e2baf9d8a1971b97341ed2a"
          alt=""
          className="absolute opacity-40 w-[101px] h-[94px] right-[262px] top-[512px] max-sm:hidden"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4388b127b847ff3912cac58506cb64f21a52cd91"
          alt=""
          className="absolute opacity-40 w-[314px] h-[292px] right-[29px] top-[698px] max-sm:hidden"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a5312601aa419d658fc3c2e45cc223791a4279"
          alt=""
          className="absolute opacity-40 w-[101px] h-[94px] left-[60px] top-[296px] max-sm:hidden"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a743b32cb35b0dc8f5e063f6241d6800018c0d"
          alt=""
          className="absolute opacity-40 w-[158px] h-[147px] right-0 top-[154px] max-sm:hidden"
        />
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/23cb10d31b43302ba5bc2c7abb7e6e53c6ed74fe"
        alt="Hemp Farm"
        className="w-[1069px] h-[242px] block border shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mx-auto my-0 border-solid border-white max-md:w-full max-md:h-auto"
      />
    </section>
  );
};

export default AboutSection;
