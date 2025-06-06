import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src="/all-outdoor.jpeg" alt="All Outdoor Fence Logo" className="h-10" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium text-lg">
          <li><Link to="/" className="hover:text-flag-red">Home</Link></li>
          <li><Link to="/about" className="hover:text-flag-red">About</Link></li>
          <li><Link to="/services" className="hover:text-flag-red">Services</Link></li>
          <li><Link to="/contact" className="hover:text-flag-red">Contact</Link></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800 text-3xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
         <motion.div
  key="mobile-menu"
  initial="hidden"
  animate="visible"
  exit="exit"
  variants={mobileMenuVariants}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="md:hidden bg-gray-50 shadow-inner px-6 py-6 rounded-b-xl space-y-4 text-gray-800 font-semibold text-center text-lg"
>
  <Link to="/" onClick={closeMenu} className="block py-2 border-b border-gray-200 hover:text-flag-red">Home</Link>
  <Link to="/about" onClick={closeMenu} className="block py-2 border-b border-gray-200 hover:text-flag-red">About</Link>
  <Link to="/services" onClick={closeMenu} className="block py-2 border-b border-gray-200 hover:text-flag-red">Services</Link>
  <Link to="/contact" onClick={closeMenu} className="block py-2 hover:text-flag-red">Contact</Link>
</motion.div>

        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
