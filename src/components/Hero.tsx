import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-6 sm:px-8 relative bg-background">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-10">
            <Image
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
              alt="Rachel Thompson - Graphic Designer, Illustrator & Artist"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-border/20 shadow-sm"
              priority
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight mb-8 text-foreground">
            Rachel Thompson
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-accent mb-10 max-w-2xl mx-auto leading-relaxed">
            Graphic Designer, Illustrator & Artist
          </p>
          <p className="text-sm sm:text-base text-accent/80 max-w-xl mx-auto leading-relaxed mb-12">
            Creating bespoke design and illustration that helps brands flourish. 
            Specializing in minimalist design with attention to detail and 
            a commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/portfolio"
              className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-light tracking-wide"
            >
              View Portfolio
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-accent hover:text-foreground transition-colors duration-300 text-sm font-light tracking-wide"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
        {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in">
        <div className="w-px h-16 bg-border/40 mb-4"></div>
        <p className="text-xs text-accent/60 tracking-wider uppercase">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
