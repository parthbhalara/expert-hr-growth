
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import ServiceCard from "@/components/ServiceCard";
import { 
  Users, 
  Calculator, 
  Briefcase, 
  Shield, 
  BarChart 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "recruitment",
      title: "Recruitment & Talent Acquisition",
      description: "We help businesses find, screen, and onboard top talent efficiently with our comprehensive recruitment services.",
      icon: <Users className="h-6 w-6 text-hr-blue" />,
      details: [
        "Job description development and optimization",
        "Candidate sourcing and screening",
        "Interview coordination and assessment",
        "Offer management and negotiation",
        "Onboarding program development",
        "Recruitment process optimization"
      ]
    },
    {
      id: "payroll",
      title: "Payroll & Compliance Management",
      description: "Stay legally compliant while ensuring smooth payroll processing through our comprehensive compliance solutions.",
      icon: <Calculator className="h-6 w-6 text-hr-blue" />,
      details: [
        "Payroll administration and processing",
        "Tax compliance and reporting",
        "Benefits administration",
        "Regulatory updates and compliance",
        "Payroll system implementation",
        "Record keeping and documentation"
      ]
    },
    {
      id: "executive",
      title: "Executive HR Assistance",
      description: "Support for leadership teams in HR administration, strategic planning, and executive development.",
      icon: <Briefcase className="h-6 w-6 text-hr-blue" />,
      details: [
        "Leadership team coaching",
        "HR strategy development",
        "Executive training programs",
        "Performance management systems",
        "Succession planning",
        "Organizational structure design"
      ]
    },
    {
      id: "relations",
      title: "Employee Relations & Legal Compliance",
      description: "Manage workplace conflicts, performance issues, and ensure legal compliance across all HR functions.",
      icon: <Shield className="h-6 w-6 text-hr-blue" />,
      details: [
        "Conflict resolution and mediation",
        "Performance management processes",
        "Workplace investigations",
        "Policy development and implementation",
        "Legal compliance audits",
        "Employee handbook creation"
      ]
    },
    {
      id: "business",
      title: "HR Business Partnering",
      description: "Long-term HR strategy and partnership to drive business growth, efficiency, and organizational development.",
      icon: <BarChart className="h-6 w-6 text-hr-blue" />,
      details: [
        "HR department development",
        "HR metrics and analytics",
        "Employee engagement strategies",
        "Organizational development",
        "Change management",
        "Cultural transformation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-hr-blue-light to-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-hr-gray-900 mb-6">
                Our HR Services
              </h1>
              <p className="text-xl text-hr-gray-700 mb-8">
                Comprehensive human resources solutions tailored to your business needs
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Overview */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">How We Can Help</h2>
              <p className="section-subtitle">
                From talent acquisition to HR strategy, we provide the expertise you need to build and maintain a thriving workforce
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Detailed Services */}
        {services.map((service) => (
          <section key={service.id} id={service.id} className="py-16 bg-hr-gray-100">
            <div className="container-custom">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-hr-blue-light rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-semibold text-hr-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-hr-gray-700 mb-8">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-hr-blue mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-hr-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-white p-6 border border-hr-gray-200 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">
                      Ready to get started?
                    </h3>
                    <p className="text-hr-gray-600 mb-6">
                      Contact us today to discuss your {service.title.toLowerCase()} needs and how we can help your business succeed.
                    </p>
                    <a 
                      href="/contact" 
                      className="btn-primary inline-block"
                    >
                      Request a Consultation
                    </a>
                  </div>
                </div>
                
                <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md border border-hr-gray-200">
                  <h3 className="text-xl font-semibold text-hr-gray-800 mb-6">
                    Why Our {service.title} Service Stands Out
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-hr-blue-light rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hr-blue" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-hr-gray-800 mb-2">Personalized Approach</h4>
                        <p className="text-hr-gray-600">We tailor our services to your specific industry, company size, and business goals.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-hr-blue-light rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hr-blue" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-hr-gray-800 mb-2">Expert Guidance</h4>
                        <p className="text-hr-gray-600">Access to certified HR professionals with extensive experience in this area.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-hr-blue-light rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hr-blue" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-hr-gray-800 mb-2">Measurable Results</h4>
                        <p className="text-hr-gray-600">We focus on delivering tangible outcomes that positively impact your business.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-hr-blue-light rounded-full p-2 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-hr-blue" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-hr-gray-800 mb-2">Ongoing Support</h4>
                        <p className="text-hr-gray-600">We don't just implement and leave – we provide continuous guidance and support.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
