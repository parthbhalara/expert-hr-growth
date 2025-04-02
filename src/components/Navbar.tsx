
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-hr-blue">HR</span>
            <span className="text-2xl font-bold text-hr-gray-800">Expert</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-hr-gray-600 hover:text-hr-blue font-medium">
              Home
            </Link>
            <Link to="/about" className="text-hr-gray-600 hover:text-hr-blue font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-hr-gray-600 hover:text-hr-blue font-medium">
              Services
            </Link>
            <Link to="/blog" className="text-hr-gray-600 hover:text-hr-blue font-medium">
              Insights
            </Link>
            <Link to="/contact" className="text-hr-gray-600 hover:text-hr-blue font-medium">
              Contact
            </Link>
            <Link to="/contact" className="btn-primary">
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-hr-gray-600">
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-hr-gray-600 hover:text-hr-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-hr-gray-600 hover:text-hr-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-hr-gray-600 hover:text-hr-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/blog" 
                className="text-hr-gray-600 hover:text-hr-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </Link>
              <Link 
                to="/contact" 
                className="text-hr-gray-600 hover:text-hr-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="btn-primary inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
