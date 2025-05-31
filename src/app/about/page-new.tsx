import Image from "next/image";

const About = () => {
  return (
    <div className="pt-24 pb-20 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            About Rachel
          </h1>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto leading-relaxed">
            Graphic designer, illustrator, and artist passionate about creating 
            meaningful visual experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="animate-slide-up">
              <h2 className="text-2xl font-light tracking-wide mb-6">Background</h2>
              <div className="space-y-6 text-accent/90 leading-relaxed">
                <p>
                  Rachel Thompson is a graphic designer, illustrator, and artist who specializes in creating 
                  bespoke visual solutions that help brands flourish. With over 8 years of experience, 
                  her work blends beauty and practicality, creating thoughtful designs that connect 
                  with audiences and bring stories to life.
                </p>
                <p>
                  With a BFA in Graphic Design from Rhode Island School of Design and additional 
                  studies in illustration at Parsons, Rachel brings a unique perspective to every 
                  project. She believes that good design should be both functional and beautiful, 
                  solving problems while creating emotional connections.
                </p>
                <p>
                  Every piece is grounded in craftsmanship, with meticulous attention to detail 
                  and a commitment to quality. She works closely with clients to understand their 
                  vision and translate it into compelling visual narratives that drive results.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-2xl font-light tracking-wide mb-6">Approach</h2>
              <div className="space-y-6 text-accent/90 leading-relaxed">
                <p>
                  Rachel&apos;s design philosophy centers on minimalism and functionality. She believes 
                  that the most powerful designs are often the simplest ones – those that 
                  communicate clearly and resonate deeply without unnecessary complexity.
                </p>
                <p>
                  Her process begins with deep listening and research, understanding not just 
                  what a client wants, but why they want it and who they&apos;re trying to reach. 
                  This foundation allows her to create designs that are not only beautiful 
                  but strategically sound and market-tested.
                </p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h2 className="text-2xl font-light tracking-wide mb-6">Experience</h2>
              <div className="space-y-6 text-accent/90 leading-relaxed">
                <p>
                  Based in Portland, Oregon, Rachel works with clients worldwide, from startups 
                  to Fortune 500 companies. She has created visual identities for sustainable 
                  fashion brands, illustrated covers for The New Yorker and Time Magazine, 
                  and developed comprehensive brand systems for restaurants and cultural institutions.
                </p>
                <p>
                  Her work has been featured in Communication Arts, Print Magazine, and the 
                  Type Directors Club Annual, and has helped numerous brands establish strong 
                  visual identities that support their business goals and connect authentically 
                  with their target audiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="animate-slide-up">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center mb-6 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                  alt="Rachel Thompson in her studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <p className="text-sm text-accent/80 text-center">
                Rachel in her Portland studio
              </p>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-lg font-light tracking-wide mb-4">Education</h3>
              <div className="space-y-3 text-sm text-accent/80">
                <p>BFA Graphic Design<br />Rhode Island School of Design</p>
                <p>Illustration Studies<br />Parsons School of Design</p>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h3 className="text-lg font-light tracking-wide mb-4">Recognition</h3>
              <div className="space-y-2 text-sm text-accent/80">
                <p>• Communication Arts Design Annual</p>
                <p>• Print Magazine Regional Design Annual</p>
                <p>• Type Directors Club Annual</p>
                <p>• American Illustration Showcase</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services */}
        <div className="border-t border-border pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light tracking-tight mb-6">Services</h2>
            <p className="text-accent/80 max-w-2xl mx-auto leading-relaxed">
              Specialized creative services tailored to your brand&apos;s unique needs and goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <h3 className="text-xl font-light tracking-wide mb-4">Graphic Design</h3>
              <div className="space-y-2 text-sm text-accent/80">
                <p>• Brand Identity & Logo Design</p>
                <p>• Packaging & Print Materials</p>
                <p>• Marketing Collateral</p>
                <p>• Annual Reports & Publications</p>
                <p>• Digital Graphics & Web Assets</p>
              </div>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-light tracking-wide mb-4">Illustration</h3>
              <div className="space-y-2 text-sm text-accent/80">
                <p>• Editorial Illustration</p>
                <p>• Book & Magazine Covers</p>
                <p>• Children&apos;s Book Illustration</p>
                <p>• Infographics & Data Visualization</p>
                <p>• Custom Artwork & Commissions</p>
              </div>
            </div>
            
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-light tracking-wide mb-4">Art Direction</h3>
              <div className="space-y-2 text-sm text-accent/80">
                <p>• Creative Strategy Development</p>
                <p>• Visual Storytelling</p>
                <p>• Brand Positioning</p>
                <p>• Campaign Concept Development</p>
                <p>• Creative Team Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
