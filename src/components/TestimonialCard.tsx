
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
}

const TestimonialCard = ({ name, position, company, testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 relative border border-hr-gray-200">
      <div className="absolute -top-4 left-8 bg-hr-blue rounded-full p-2">
        <Quote className="h-5 w-5 text-white" />
      </div>
      <p className="text-hr-gray-700 mb-6 pt-4">{testimonial}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-hr-gray-300 rounded-full flex items-center justify-center text-hr-gray-600 font-medium">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <p className="font-semibold text-hr-gray-800">{name}</p>
          <p className="text-sm text-hr-gray-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
