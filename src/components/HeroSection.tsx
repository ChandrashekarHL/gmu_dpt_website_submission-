import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Cpu, Network } from "lucide-react";
import heroImage from "@/assets/ai-ml-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI and Machine Learning Technology" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gmu-maroon/80 to-gmu-dark-maroon/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="animate-bounce delay-0">
              <Brain className="h-12 w-12 text-gmu-gold" />
            </div>
            <div className="animate-bounce delay-150">
              <Cpu className="h-12 w-12 text-gmu-gold" />
            </div>
            <div className="animate-bounce delay-300">
              <Network className="h-12 w-12 text-gmu-gold" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Department of
            <span className="block bg-gradient-to-r from-gmu-gold to-gmu-light-gold bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            <span className="block text-gmu-gold">& Machine Learning</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering the future of technology through cutting-edge research, innovative education, 
            and transformative solutions in AI and Machine Learning
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-48">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="gold" size="lg" className="min-w-48">
              Research Excellence
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gmu-gold mb-2">500+</div>
              <div className="text-primary-foreground/80 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gmu-gold mb-2">25+</div>
              <div className="text-primary-foreground/80 text-sm">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gmu-gold mb-2">100+</div>
              <div className="text-primary-foreground/80 text-sm">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gmu-gold mb-2">95%</div>
              <div className="text-primary-foreground/80 text-sm">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gmu-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gmu-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;