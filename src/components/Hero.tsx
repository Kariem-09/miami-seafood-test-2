import { Button } from "@/components/ui/button";
import heroImage from "@/assets/restaurant-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-float">
          Miami
        </h1>
        
        <div className="mb-8 space-y-4">
          <p className="text-2xl md:text-3xl font-light" dir="rtl">
            من قلب البحر لقلبك
          </p>
          <p className="text-xl md:text-2xl font-light" dir="rtl">
            מהלב הים ללבך
          </p>
        </div>
        
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto" dir="rtl">
          استمتع بأطيب المأكولات البحرية الطازجة في أجواء البحر الأبيض المتوسط الساحرة
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg">
            استكشف القائمة
          </Button>
          <Button variant="elegant" size="lg">
            احجز الآن
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;