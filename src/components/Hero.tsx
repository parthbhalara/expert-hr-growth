
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-hr-blue-light to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-hr-gray-900 leading-tight mb-6">
              Expert HR Solutions to Build a Thriving Workforce
            </h1>
            <p className="text-lg text-hr-gray-700 mb-8 max-w-lg">
              Professional HR guidance from a Certified HR Professional (CHRP) providing tailored services for recruitment, compliance, and strategic HR planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-center">
                Book a Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary text-center">
                Explore Services
              </Link>
            </div>
            <div className="mt-10">
              <p className="text-sm text-hr-gray-600 mb-3">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="bg-white/80 p-2 rounded shadow-sm">
                  <div className="w-24 h-10 bg-hr-gray-200 rounded flex items-center justify-center text-hr-gray-500">
                    Client Logo
                  </div>
                </div>
                <div className="bg-white/80 p-2 rounded shadow-sm">
                  <div className="w-24 h-10 bg-hr-gray-200 rounded flex items-center justify-center text-hr-gray-500">
                    Client Logo
                  </div>
                </div>
                <div className="bg-white/80 p-2 rounded shadow-sm">
                  <div className="w-24 h-10 bg-hr-gray-200 rounded flex items-center justify-center text-hr-gray-500">
                    Client Logo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                alt="HR Professionals in a meeting" 
                className="w-full h-auto rounded-md" 
              />
              <div className="bg-hr-blue text-white py-2 px-4 rounded absolute -mt-12 ml-4">
                <span className="font-medium">CHRP Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
