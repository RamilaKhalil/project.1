import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-[5vh] px-[5vw]">
      <div className="flex flex-col md:flex-row justify-between gap-[3vh] md:gap-[0vw]">

        {/* Brand Logo and Description */}
        <div className="flex flex-col items-start mb-[3vh] md:mb-0">
          <h2 className="text-[4vw] md:text-[2vw] font-bold text-gray-500">KidsStyle</h2>
          <p className="text-[2vw] md:text-[1vw] text-gray-300 mt-[1vh] max-w-[50vw] md:max-w-[20vw]">
            Discover adorable and comfortable clothes for kids. Soft, stylish, and made with love.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-[5vw] md:gap-[2vw]">
          <div>
            <h3 className="text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vh]  text-gray-500 pr-4">Shop</h3>
            <ul className="text-[2vw] md:text-[1vw] text-gray-300 space-y-[1vh]">
              <li><a href="#new-arrivals" className="hover:text-white">New Arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-white">Best Sellers</a></li>
              <li><a href="#sale" className="hover:text-white">Sale</a></li>
              <li><a href="#gift-cards" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vh]  text-gray-500 px-6">Customer Care</h3>
            <ul className="text-[2vw] md:text-[1vw] text-gray-300 space-y-[1vh] px-6">
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
              <li><a href="#returns" className="hover:text-white">Returns</a></li>
              <li><a href="#shipping" className="hover:text-white">Shipping</a></li>
              <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="flex flex-col items-start">
          <h3 className="text-[2.5vw] md:text-[1.5vw] font-semibold mb-[1vh] text-gray-500">Subscribe</h3>
          <p className="text-[2vw] md:text-[1vw] text-gray-300 mb-[2vh] max-w-[50vw] md:max-w-[20vw]">
            Sign up for updates and special offers.
          </p>
          <div className="flex items-center w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-[1.5vh] text-[2vw] md:text-[1vw] w-full rounded-l-md bg-gray-700 placeholder-gray-400 text-white focus:outline-none  "
            />
            <button className="bg-gray-800 p-[1.5vh] text-[1vw] md:text-[1vw]  rounded-r-md hover:bg-gray-900">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Social Media and Copyright */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-[5vh] border-t border-gray-700 pt-[3vh]">
        <div className="flex space-x-[3vw] md:space-x-[2vw] text-[3vw] md:text-[1.5vw]">
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-gray-500"><FaFacebookF /></a>
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-gray-500"><FaInstagram /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-gray-500"><FaTwitter /></a>
          <a href="https://pinterest.com" aria-label="Pinterest" className="hover:text-gray-500"><FaPinterest /></a>
        </div>
        <p className="text-[2vw] md:text-[1vw] text-gray-500 mt-[2vh] md:mt-0">
          © 2024 KidsStyle. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
