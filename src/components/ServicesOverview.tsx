
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Recruitment & Talent Acquisition",
      description: "Find, screen, and onboard top talent efficiently with our expert recruitment services.",
      features: ["Job description creation", "Candidate screening", "Interview coordination", "Onboarding support"],
      link: "/services#recruitment"
    },
    {
      id: 2,
      title: "Payroll & Compliance Management",
      description: "Stay legally compliant while ensuring smooth payroll processing and regulatory adherence.",
      features: ["Payroll administration", "Tax compliance", "Policy development", "Regulatory updates"],
      link: "/services#payroll"
    },
    {
      id: 3,
      title: "Executive HR Assistance",
      description: "Support for leadership teams in HR administration and strategic planning.",
      features: ["Leadership coaching", "HR strategy development", "Executive training", "Performance systems"],
      link: "/services#executive"
    },
    {
      id: 4,
      title: "Employee Relations & Legal Compliance",
      description: "Manage workplace conflicts, performance issues, and ensure legal compliance.",
      features: ["Conflict resolution", "Performance management", "Workplace investigations", "Policy development"],
      link: "/services#relations"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Our HR Services</h2>
          <p className="section-subtitle">
            Comprehensive HR solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white border border-hr-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">{service.title}</h3>
              <p className="text-hr-gray-600 mb-6">{service.description}</p>
              
              <ul className="mb-8 space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-hr-blue mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-hr-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={service.link} 
                className="text-hr-blue font-medium hover:text-hr-blue-dark flex items-center"
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
