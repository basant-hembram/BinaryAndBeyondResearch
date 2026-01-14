import { Card, CardContent } from './ui/card';
import { Star, TrendingUp } from 'lucide-react';
import { data } from '../data';

const SuccessStories = () => {
  const { successStories } = data.home;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A1A3A] to-[#162d52] rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src={successStories.mainImage}
                alt="Success Story" 
                className="w-full h-full object-cover opacity-80"
              />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 rounded-xl p-6 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="bg-[#E6AF1C] rounded-full p-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#0A1A3A]">{successStories.stats.count}</p>
                    <p className="text-gray-600">{successStories.stats.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1A3A] mb-4">
              {successStories.title} <span className="text-[#E6AF1C]">{successStories.titleHighlight}</span> {successStories.subtitle}
            </h2>
            <p className="text-gray-600 mb-8">
              {successStories.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {successStories.investors.map((investor, index) => (
                <Card 
                  key={index}
                  className="hover:shadow-lg transition-all hover:border-[#E6AF1C] border-2"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={investor.image}
                        alt={investor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-[#0A1A3A] text-sm">
                          {investor.name}
                        </h4>
                        <p className="text-xs text-gray-600">{investor.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-xs text-gray-600">Returns</span>
                      <span className="font-bold text-[#E6AF1C] text-lg">+{investor.returns}</span>
                    </div>
                    
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#E6AF1C] text-[#E6AF1C]" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
