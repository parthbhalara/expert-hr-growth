
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hr-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">HR</span>
              <span className="text-2xl font-bold text-hr-blue">Expert</span>
            </Link>
            <p className="text-hr-gray-400 mb-6">
              Professional HR consultancy providing expert solutions for businesses across North America.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hr-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hr-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-hr-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-hr-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-hr-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-hr-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-hr-gray-400 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-hr-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#recruitment" className="text-hr-gray-400 hover:text-white transition-colors">
                  Recruitment & Talent Acquisition
                </Link>
              </li>
              <li>
                <Link to="/services#payroll" className="text-hr-gray-400 hover:text-white transition-colors">
                  Payroll & Compliance Management
                </Link>
              </li>
              <li>
                <Link to="/services#executive" className="text-hr-gray-400 hover:text-white transition-colors">
                  Executive HR Assistance
                </Link>
              </li>
              <li>
                <Link to="/services#relations" className="text-hr-gray-400 hover:text-white transition-colors">
                  Employee Relations
                </Link>
              </li>
              <li>
                <Link to="/services#business" className="text-hr-gray-400 hover:text-white transition-colors">
                  HR Business Partnering
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-hr-gray-400">123 Business Avenue, Suite 200<br />Toronto, ON M5V 2N5</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-hr-blue mr-3 flex-shrink-0" />
                <a href="tel:+14165551234" className="text-hr-gray-400 hover:text-white transition-colors">
                  (416) 555-1234
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-hr-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@hrexpert.com" className="text-hr-gray-400 hover:text-white transition-colors">
                  info@hrexpert.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-hr-gray-800 pt-8 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-hr-gray-400 mb-6">
              Stay updated with the latest HR insights, trends, and best practices.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-hr-gray-800 border border-hr-gray-700 text-white rounded-md px-4 py-2 flex-grow focus:outline-none focus:ring-2 focus:ring-hr-blue"
                required
              />
              <button 
                type="submit"
                className="bg-hr-blue hover:bg-blue-700 text-white font-medium rounded-md px-6 py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-hr-gray-800 pt-8 text-center">
          <p className="text-hr-gray-500 text-sm">
            &copy; {new Date().getFullYear()} HR Expert. All rights reserved. | <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
