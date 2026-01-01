import { Card, CardContent } from './ui/card';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: "Rajesh Choudhury",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
    },
    {
      name: "Gaurav Ranjan",
      role: "Co-Founder",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] mb-4">
            Meet your
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#E6AF1C]">
            Finyzer Assets Founders
          </h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            At Finyzer Assets, We believe in the potential of each individual and work towards creating a financial plan that aligns with your dreams and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
          {founders.map((founder, index) => (
            <Card 
              key={index}
              className="hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 hover:border-[#E6AF1C]"
            >
              <div className="aspect-[3/4] overflow-hidden bg-gray-200">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-xl text-[#0A1A3A] mb-1">
                  {founder.name}
                </h4>
                <p className="text-gray-600 mb-4">{founder.role}</p>
                
                <div className="flex justify-center gap-3">
                  <a 
                    href="#" 
                    className="bg-[#0A1A3A] text-white p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-[#0A1A3A] text-white p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href="#" 
                    className="bg-[#0A1A3A] text-white p-2 rounded-full hover:bg-[#E6AF1C] transition-colors"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
