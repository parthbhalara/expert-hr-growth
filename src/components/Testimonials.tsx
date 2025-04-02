
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      testimonial: "Working with HR Expert transformed our recruitment process. We've been able to attract top talent and improve our retention rates significantly.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Manufacturing",
      testimonial: "The payroll and compliance services provided by HR Expert have saved us countless hours and helped us avoid potential legal issues.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Startup Solutions",
      testimonial: "As a growing startup, having HR Expert as our partner has been invaluable. Their strategic guidance has helped us build a strong company culture.",
    }
  ];

  return (
    <section className="py-16 bg-hr-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Hear from businesses we've helped succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
