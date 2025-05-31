import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-24 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-8 text-foreground">
              About Rachel
            </h2>
            <div className="space-y-6 text-accent/90 leading-relaxed">
              <p>
                Rachel Thompson is a graphic designer, illustrator, and artist who specializes 
                in creating bespoke visual solutions that help brands flourish. With over 8 years 
                of experience, her work blends beauty and practicality, creating thoughtful designs 
                that connect with audiences and bring stories to life.
              </p>
              <p>
                Every piece is grounded in craftsmanship, with meticulous attention to 
                detail and a commitment to quality. She believes in the power of 
                minimalist design to communicate complex ideas with clarity and elegance, 
                drawing inspiration from Swiss design principles and contemporary art.
              </p>
              <p>
                Based in Portland, Oregon, Rachel works with clients worldwide, from startups 
                to Fortune 500 companies. Her work has been featured in major design publications 
                and has helped numerous brands establish strong visual identities that drive results.
              </p>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-light tracking-wide text-center"
              >
                Read Full Story
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-accent hover:text-foreground transition-colors duration-300 text-sm font-light tracking-wide text-center"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>
          
          <div className="animate-slide-up lg:order-first">            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&h=600&fit=crop&crop=face"
                alt="Rachel Thompson working in her Portland studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="mt-20 pt-20 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-4">
              Services
            </h3>
            <p className="text-accent/80 max-w-2xl mx-auto">
              Specialized creative services tailored to your brand&apos;s unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-slide-up">
              <h4 className="text-lg font-light tracking-wide mb-3">Graphic Design</h4>
              <p className="text-sm text-accent/80 leading-relaxed">
                Brand identity, packaging design, print materials, 
                and digital graphics
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h4 className="text-lg font-light tracking-wide mb-3">Illustration</h4>
              <p className="text-sm text-accent/80 leading-relaxed">
                Editorial illustration, book covers, infographics, 
                and custom artwork
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h4 className="text-lg font-light tracking-wide mb-3">Art Direction</h4>
              <p className="text-sm text-accent/80 leading-relaxed">
                Creative strategy, visual storytelling, 
                and brand positioning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
