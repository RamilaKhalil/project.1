


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false); // Login form toggle state

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  return (
    <nav className="bg-white shadow-md h-[70px] pt-2 relative">
      <div className="flex items-center justify-between px-4">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-900 flex items-center">
          <a href="/">Twirl & Co.</a>
        </div>

        {/* Mobile Menu, Cart, and Login Icons */}
        <div className="md:hidden flex items-center space-x-4 pr-4">
          <FontAwesomeIcon icon={faBars} onClick={toggleMenu} className="text-xl text-gray-900 cursor-pointer" />
          <FontAwesomeIcon icon={faShoppingCart} onClick={toggleCart} className="text-xl text-gray-900 cursor-pointer" />
          <FontAwesomeIcon icon={faUser} onClick={toggleLogin} className="text-xl text-gray-900 cursor-pointer" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex text-xl items-center space-x-9 pr-[30px]">
          <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
          <a href="/shop" className="text-gray-900 hover:text-gray-700">Shop</a>
          <a onClick={toggleCart} className="text-gray-900 hover:text-gray-700 cursor-pointer">Cart</a>
          <a onClick={toggleLogin} className="text-gray-900 hover:text-gray-700 cursor-pointer">Login</a>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-md text-xl space-y-4 py-4 absolute top-[70px] left-0 w-full z-50">
          <a href="/" className="text-gray-900 hover:text-gray-700">Home</a>
          <a href="/shop" className="text-gray-900 hover:text-gray-700">Shop</a>
          <a onClick={toggleCart} className="text-gray-900 hover:text-gray-700 cursor-pointer">Cart</a>
          <a onClick={toggleLogin} className="text-gray-900 hover:text-gray-700 cursor-pointer">Login</a>
        </div>
      )}

      {/* Cart Details Dropdown */}
      {cartOpen && (
        <div className="absolute right-4 md:right-10 top-[70px] bg-white shadow-md p-4 w-[90vw] md:w-[300px] z-50">
          <h2 className="text-lg font-bold mb-2">Your Cart</h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <img
                src="/images/DSC09743_5000x_be39ad93-c1f6-4938-a05f-2d0636739cbb_5000x.webp"
                alt="Item 1"
                className="w-[20%] h-auto rounded"
              />
              <div className="flex-1 px-3">
                <p className="text-gray-900 font-semibold">Kids' T-Shirt</p>
                <p className="text-gray-600">$10.00</p>
              </div>
            </li>
            <li className="flex items-center justify-between">
              <img
                src="/images/IMG_1047_5000x_ff6f4dd7-693d-425e-8337-bb7ecde99672_5000x.webp"
                alt="Item 2"
                className="w-[20%] h-auto rounded"
              />
              <div className="flex-1 px-3">
                <p className="text-gray-900 font-semibold">Kids' Shorts</p>
                <p className="text-gray-600">$15.00</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>$25.00</span>
          </div>
          <button className="mt-4 w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700">
            Checkout
          </button>
        </div>
      )}

      {/* Login Form Modal */}
      {loginOpen && (
        <div className="absolute right-4 md:right-10 top-[70px] bg-white shadow-md p-4 w-[90vw] md:w-[300px] z-50">
          <h2 className="text-lg font-bold mb-2">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Email:</label>
              <input type="email" className="w-full border rounded px-3 py-2 text-gray-700" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700">Password:</label>
              <input type="password" className="w-full border rounded px-3 py-2 text-gray-700" placeholder="Enter your password" />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700">
              Login
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
