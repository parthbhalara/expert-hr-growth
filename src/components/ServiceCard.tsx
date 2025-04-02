
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  id: string;
}

const ServiceCard = ({ title, description, icon, id }: ServiceCardProps) => {
  return (
    <div id={id} className="bg-white rounded-lg shadow-md border border-hr-gray-200 p-8 hover:shadow-lg transition-shadow">
      <div className="w-14 h-14 bg-hr-blue-light rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-hr-gray-800 mb-4">{title}</h3>
      <p className="text-hr-gray-600 mb-6">{description}</p>
      <Link 
        to="/contact" 
        className="text-hr-blue hover:text-hr-blue-dark font-medium flex items-center"
      >
        Request Service <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ServiceCard;
