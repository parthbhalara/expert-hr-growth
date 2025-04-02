
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-hr-blue py-16">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-hr-gray-900 mb-4">
              Ready to transform your HR operations?
            </h2>
            <p className="text-hr-gray-600 text-lg">
              Schedule a free consultation to discuss your HR needs and discover how we can help your business thrive.
            </p>
          </div>
          <div>
            <Link to="/contact" className="btn-primary block text-center">
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
