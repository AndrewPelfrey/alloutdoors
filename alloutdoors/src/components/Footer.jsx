function Footer() {
    return (
      <footer className="bg-black/50 backdrop-blur-sm text-white py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
          <p className="font-body text-sm">
            &copy; {new Date().getFullYear()} All Outdoor Fence & Landscaping. All rights reserved.
          </p>
          <div className="space-x-6 text-sm">
            <a href="tel:2161234567" className="hover:text-yellow-400 transition">Call Us</a>
            <a href="/contact" className="hover:text-yellow-400 transition">Contact</a>
            <a href="/services" className="hover:text-yellow-400 transition">Services</a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  