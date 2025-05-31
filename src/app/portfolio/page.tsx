"use client";

import { useState } from "react";
import Image from "next/image";
import { portfolioItems, categories } from "@/data/portfolio";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProjects = selectedCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24 pb-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Portfolio
          </h1>
          <p className="text-lg text-accent/80 max-w-2xl mx-auto leading-relaxed">
            A comprehensive collection of work spanning graphic design, 
            illustration, and artistic exploration.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                selectedCategory === category.id
                  ? "border-b-2 border-foreground text-foreground"
                  : "text-accent/60 hover:text-foreground"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gray-100 mb-6 overflow-hidden cursor-pointer relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <p className="text-xs text-accent/60 tracking-wider uppercase">
                    {project.category.replace('-', ' ')}
                  </p>
                  <p className="text-xs text-accent/60">
                    {project.year}
                  </p>
                </div>
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
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-accent/60">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
