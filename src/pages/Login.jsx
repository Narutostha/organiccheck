import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Navigation */}
      <nav className="bg-white border-b px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/api/placeholder/40/40"
            alt="Organic Fiber Logo"
            className="h-8"
          />
          <h1 className="text-green-700 font-medium ml-2 text-xl">
            Organic Fiber
          </h1>
          <span className="text-gray-400 text-xs ml-1">
            eco-friendly clothing
          </span>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="uppercase text-sm font-medium">
            Home
          </a>
          <a href="#" className="uppercase text-sm font-medium">
            About Us
          </a>
          <a href="#" className="uppercase text-sm font-medium">
            Products
          </a>
          <a href="#" className="uppercase text-sm font-medium">
            Sale
          </a>
          <a href="#" className="uppercase text-sm font-medium">
            Blog
          </a>
        </div>

        <div className="flex items-center space-x-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Product"
              className="rounded-full bg-gray-100 pl-8 pr-4 py-1 text-sm w-40"
            />
            <svg
              className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <button className="p-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </button>
          <button className="p-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex h-screen">
        {/* Left Side - Login Form */}
        <div className="w-1/2 bg-green-900 p-12 flex flex-col justify-center">
          <div className="max-w-md mx-auto">
            <h2 className="text-white text-4xl font-bold mb-6">
              Welcome Back to <br />
              Organic Fiber
            </h2>

            <p className="text-white mb-6">Please Enter your Account Details</p>

            <div className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded bg-gray-100 border-0"
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded bg-gray-100 border-0 pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        showPassword
                          ? "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"
                          : "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      }
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="text-right">
                <a href="#" className="text-red-300 text-sm">
                  Forgot Password?
                </a>
              </div>

              <button className="w-full py-3 bg-red-600 text-white rounded font-medium">
                Log in
              </button>

              <div className="text-center text-white">
                <span>Don't have an account? </span>
                <a href="#" className="text-red-300">
                  Sign up
                </a>
              </div>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-500" />
                <span className="px-4 text-white text-sm">Or log in with</span>
                <hr className="flex-grow border-gray-500" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center bg-white py-2 px-4 rounded">
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
                      fill="#34A853"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      transform="translate(7 7)"
                    />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded">
                  <svg
                    className="w-5 h-5 mr-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 relative">
          <img
            src="/api/placeholder/800/600"
            alt="Model in sustainable clothing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Enjoy Our Seasonal Eco-Friendly Collection
            </h2>
            <p className="text-sm mb-6">
              Log in to your account and explore our curated collection of
              eco-friendly products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
