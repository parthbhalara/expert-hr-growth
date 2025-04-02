
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Award, CheckCircle, BookOpen, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hr-blue-light to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-hr-gray-900 mb-6">
                About HR Expert
              </h1>
              <p className="text-xl text-hr-gray-700 mb-8">
                Meet the trusted HR partner helping businesses across North America build thriving workplaces.
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction */}
        <section className="py-16">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="HR Professional" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold text-hr-gray-900 mb-6">
                  Our Mission & Vision
                </h2>
                <p className="text-hr-gray-700 mb-6">
                  At HR Expert, we believe that effective human resources management is a cornerstone of business success. Our mission is to empower organizations with strategic HR solutions that foster growth, compliance, and a positive workplace culture.
                </p>
                <p className="text-hr-gray-700 mb-8">
                  Founded by a Certified Human Resources Professional (CHRP) with over 15 years of experience, our consultancy brings specialized expertise to businesses of all sizes across North America.
                </p>
                
                <div className="flex items-start mb-6">
                  <div className="mr-4">
                    <BookOpen className="h-6 w-6 text-hr-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-hr-gray-800 mb-2">Our Mission</h3>
                    <p className="text-hr-gray-600">
                      To deliver strategic HR solutions that align with business objectives, ensure compliance, and create thriving workplace environments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <Target className="h-6 w-6 text-hr-blue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-hr-gray-800 mb-2">Our Vision</h3>
                    <p className="text-hr-gray-600">
                      To be the most trusted HR partner for businesses seeking to build exceptional workforces that drive sustainable success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Credentials */}
        <section className="py-16 bg-hr-gray-100">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Credentials & Expertise</h2>
              <p className="section-subtitle">
                Professional certifications and specialized experience you can trust
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="bg-hr-blue-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-hr-blue" />
                </div>
                <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">Certified HR Professional (CHRP)</h3>
                <p className="text-hr-gray-600">
                  Nationally recognized certification demonstrating expertise in human resources management.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="bg-hr-blue-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hr-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">15+ Years of Experience</h3>
                <p className="text-hr-gray-600">
                  Extensive experience across various industries including technology, manufacturing, and healthcare.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="bg-hr-blue-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-hr-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">Continuing Education</h3>
                <p className="text-hr-gray-600">
                  Ongoing professional development to stay current with evolving HR trends and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <h2 className="text-3xl font-semibold text-hr-gray-900 mb-6">
                  Why Choose HR Expert
                </h2>
                <p className="text-hr-gray-700 mb-8">
                  We're not just consultants - we're partners in your business growth. Our approach focuses on understanding your unique needs and delivering tailored solutions that create measurable impact.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-hr-gray-800">Personalized Approach</h3>
                      <p className="text-hr-gray-600">Custom solutions tailored to your specific business needs.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-hr-gray-800">Industry Expertise</h3>
                      <p className="text-hr-gray-600">Specialized knowledge across various sectors and business sizes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-hr-gray-800">Compliance Focused</h3>
                      <p className="text-hr-gray-600">Up-to-date knowledge of HR laws and regulations in North America.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-hr-gray-800">Results Driven</h3>
                      <p className="text-hr-gray-600">Measurable outcomes that positively impact your bottom line.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-hr-gray-800">Strategic Partnership</h3>
                      <p className="text-hr-gray-600">Long-term collaboration to help you achieve your business goals.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="HR Professionals meeting" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
