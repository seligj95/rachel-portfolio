import Link from "next/link";
import Image from "next/image";
import { featuredItems } from "@/data/portfolio";

const FeaturedWork = () => {
  return (
    <section className="py-24 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-foreground">
            Selected Work
          </h2>
          <p className="text-accent/80 max-w-2xl mx-auto leading-relaxed">
            A curated selection of recent projects spanning graphic design, 
            illustration, and artistic exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featuredItems.map((project, index) => (
            <div 
              key={project.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gray-100 mb-6 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="space-y-2">
                <p className="text-xs text-accent/60 tracking-wider uppercase">
                  {project.category.replace('-', ' ')}
                </p>
                <h3 className="text-lg font-light tracking-wide group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-accent/80 leading-relaxed">
                  {project.description}
                </p>
                {project.client && project.client !== "Personal Work" && (
                  <p className="text-xs text-accent/60">
                    Client: {project.client}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm font-light tracking-wide"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
