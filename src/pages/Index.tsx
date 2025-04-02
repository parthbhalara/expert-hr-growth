
import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, FileText, Users, Shield, BarChart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Briefcase className="h-6 w-6 text-hr-blue" />,
      title: "HR Expertise",
      description: "Access to a Certified HR Professional (CHRP) with extensive industry experience.",
    },
    {
      icon: <FileText className="h-6 w-6 text-hr-blue" />,
      title: "Legal Compliance",
      description: "Stay up-to-date with the latest HR laws and regulations in North America.",
    },
    {
      icon: <Users className="h-6 w-6 text-hr-blue" />,
      title: "Talent Management",
      description: "Attract, develop, and retain top talent with our specialized strategies.",
    },
    {
      icon: <Shield className="h-6 w-6 text-hr-blue" />,
      title: "Risk Mitigation",
      description: "Identify and address potential HR issues before they become problems.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-hr-blue" />,
      title: "Strategic Planning",
      description: "Align your HR functions with your overall business objectives.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Why Choose HR Expert</h2>
              <p className="section-subtitle">
                Partner with us for comprehensive HR solutions that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-hr-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-hr-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-hr-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ServicesOverview />
        
        {/* Stats Section */}
        <section className="py-16 bg-hr-blue text-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-lg">Satisfied Clients</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-lg">Client Retention</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg">HR Projects</div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
