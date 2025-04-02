
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hr-blue-light to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-hr-gray-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-hr-gray-700 mb-8">
                Let's discuss your HR needs and find the right solutions for your business
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Information */}
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-semibold text-hr-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-hr-gray-600 mb-8">
                  Schedule a free consultation or reach out with any questions about our HR services. We're here to help your business succeed.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-hr-blue-light p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-hr-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hr-gray-900 mb-1">Our Office</h3>
                      <p className="text-hr-gray-600">
                        123 Business Avenue, Suite 200<br />
                        Toronto, ON M5V 2N5<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hr-blue-light p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-hr-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hr-gray-900 mb-1">Phone</h3>
                      <p className="text-hr-gray-600">
                        <a href="tel:+14165551234" className="hover:text-hr-blue transition-colors">
                          (416) 555-1234
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hr-blue-light p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-hr-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hr-gray-900 mb-1">Email</h3>
                      <p className="text-hr-gray-600">
                        <a href="mailto:info@hrexpert.com" className="hover:text-hr-blue transition-colors">
                          info@hrexpert.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hr-blue-light p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-hr-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hr-gray-900 mb-1">Business Hours</h3>
                      <p className="text-hr-gray-600">
                        Monday-Friday: 9:00 AM - 5:00 PM<br />
                        Saturday-Sunday: Closed
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-hr-blue-light p-3 rounded-lg mr-4">
                      <Linkedin className="h-6 w-6 text-hr-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium text-hr-gray-900 mb-1">Connect</h3>
                      <p className="text-hr-gray-600">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-hr-blue transition-colors">
                          LinkedIn Profile
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:w-2/3">
                <h2 className="text-2xl font-semibold text-hr-gray-900 mb-6">
                  Let's Discuss Your HR Needs
                </h2>
                <p className="text-hr-gray-600 mb-8">
                  Fill out the form below to schedule a free consultation or inquire about our services.
                </p>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-hr-gray-100">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-hr-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-hr-gray-600">
                We're conveniently located in downtown Toronto, easily accessible by public transportation.
              </p>
            </div>
            
            <div className="bg-white p-2 rounded-lg shadow-md">
              <div className="aspect-video bg-hr-gray-200 rounded flex items-center justify-center">
                <p className="text-hr-gray-500">Google Maps Embed</p>
                <p className="text-sm">(Live map would be embedded here)</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
