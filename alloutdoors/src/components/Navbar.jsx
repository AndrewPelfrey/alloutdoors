import { Link } from "react-router-dom";

function Navbar() {
    return (
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src="/all-outdoor.jpeg" alt="All Outdoor Fence Logo" className="h-10" />
          <ul className="flex space-x-6 text-gray-800 font-medium text-lg">
            <li><Link to="/" className="hover:text-flag-red">Home</Link></li>
            <li><Link to="/about" className="hover:text-flag-red">About</Link></li>
            <li><Link to="/services" className="hover:text-flag-red">Services</Link></li>
            <li><Link to="/contact" className="hover:text-flag-red">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;