import React from "react";

const Footer = () => (
  <footer className="border-t border-white py-6 my-4 md:my-7">
    <div className="container mx-auto text-center">
      <p className="text-gray-500 text-xs sm:text-base md:text-lg">
        &copy; {new Date().getFullYear()} Iyappan. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
