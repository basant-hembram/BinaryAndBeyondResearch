import { Card, CardContent } from './ui/card';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "CEO, Founder of Websmith",
      text: "This was undoubtedly the confidence in MFD Investors and our MFD partners, our strategies for a transparent and timeless financial advice for individual growth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop"
    },
    {
      name: "Priya Kumari",
      role: "Software Engineer",
      text: "This was undoubtedly the confidence in MFD Investors and our MFD partners, our strategies for a transparent and timeless financial advice for individual growth.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#0A1A3A] to-[#162d52]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-[#E6AF1C]">Take Our Words</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Hear what our clients say about their investment journey with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-white hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-8">
                <Quote className="text-[#E6AF1C] mb-4" size={40} />
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E6AF1C] text-[#E6AF1C]" />
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-[#0A1A3A]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
