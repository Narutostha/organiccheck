import React, { useState, useEffect, useRef } from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useRange } from "../Context/RangeContext";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../Context/CartContext";
import { products as totalProducts } from "../assets/data/productData";

const ProductPage = () => {
  const { cartItems, setCartItems } = useCart();
  const { range } = useRange();
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const currentCategoryPage = location.pathname.split("/")[2];
  const productsPerPage = 40;
  const [currentPage, setCurrentPage] = useState(1);
  const timeoutRef = useRef(null);
  const lastRangeRef = useRef(range);

  useEffect(() => {
    let categoryFilteredProducts;

    switch (currentCategoryPage) {
      case undefined:
      case "":
        categoryFilteredProducts = totalProducts;
        break;
      case "clothing":
        categoryFilteredProducts = totalProducts.filter(
          (product) => product.category.toLocaleLowerCase() === "clothing"
        );
        break;
      case "footwear":
        categoryFilteredProducts = totalProducts.filter(
          (product) => product.category.toLocaleLowerCase() === "footwear"
        );
        break;
      case "accessories":
        categoryFilteredProducts = totalProducts.filter(
          (product) => product.category.toLocaleLowerCase() === "accessories"
        );
        break;
      case "home":
        categoryFilteredProducts = totalProducts.filter(
          (product) => product.category.toLocaleLowerCase() === "home goods"
        );
        break;
      case "beauty":
        categoryFilteredProducts = totalProducts.filter(
          (product) =>
            product.category.toLocaleLowerCase() === "beauty and wellness"
        );
        break;
      case "crafts":
        categoryFilteredProducts = totalProducts.filter(
          (product) => product.category.toLocaleLowerCase() === "crafts and diy"
        );
        break;
      default:
        navigate("/");
        return;
    }

    setProducts(categoryFilteredProducts);

    handlePriceFilter(categoryFilteredProducts, range);
  }, [currentCategoryPage, navigate]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (range !== lastRangeRef.current) {
      timeoutRef.current = setTimeout(() => {
        handlePriceFilter(products, range);
        lastRangeRef.current = range;
      }, 500);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [range, products]);

  const handlePriceFilter = (productsToFilter, rangeValue) => {
    let result;

    if (rangeValue < 50) {
      result = productsToFilter;
    } else {
      result = productsToFilter.filter(
        (product) => product.price <= rangeValue
      );
    }

    setFilteredProducts(result);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPageNumbers = () => {
    if (currentPage === 1) {
      return Array.from({ length: Math.min(2, totalPages) }, (_, i) => i + 1);
    }

    if (currentPage === totalPages && totalPages > 1) {
      return [totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1].filter(
      (page) => page > 0 && page <= totalPages
    );
  };

  const productClickHandler = () => {
    navigate("/productdetail");
  };

  const addCartHandler = (e, product) => {
    e.stopPropagation();
    setCartItems({
      type: "add_product",
      payload: {
        product: {
          ...product,
          sizes: product.sizes[0],
          colors: product.colors[0],
        },
        selected: true,
        quantity: 1,
      },
    });
    console.log("clicked cart");
  };

  console.log(cartItems);

  return (
    <div className="flex-1 mx-5 mt-5 w-full">
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-800">
            No products match your filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-y-auto">
          {currentProducts.map((product, index) => (
            <div
              onClick={productClickHandler}
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex items-center justify-center p-2">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-24 md:h-36 object-cover"
                />
              </div>
              <div className="md:p-4 p-2">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14 overflow-hidden">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-darkGreen font-bold">Rs.{product.price}</p>
                  <button
                    onClick={(e) => addCartHandler(e, product)}
                    className="bg-brightGreen cursor-pointer hover:text-darkGreen text-white py-1 px-2 text-sm md:py-2 md:px-4 md:text-md rounded hover:bg-green-600 transition-colors"
                  >
                    <FaCartPlus size={19} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredProducts.length > 0 && (
        <div className="w-full flex items-center justify-center gap-2 my-5">
          {currentPage > 1 && (
            <div
              className="h-7 w-7 text-black bg-lightGreen flex items-center justify-center cursor-pointer"
              onClick={() => goToPage(currentPage - 1)}
            >
              <BsArrowLeft size={20} />
            </div>
          )}

          {getPageNumbers().map((number) => (
            <div
              key={number}
              className={`h-7 w-7 text-center cursor-pointer ${
                number === currentPage
                  ? "text-white bg-brightGreen"
                  : "text-black bg-lightGreen"
              }`}
              onClick={() => goToPage(number)}
            >
              {number}
            </div>
          ))}

          {currentPage < totalPages && (
            <div
              className="h-7 w-7 text-black bg-lightGreen flex items-center justify-center cursor-pointer"
              onClick={() => goToPage(currentPage + 1)}
            >
              <BsArrowRight size={20} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
