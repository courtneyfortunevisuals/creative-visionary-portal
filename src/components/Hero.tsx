
import React from 'react';
import { ArrowRight, Linkedin, Instagram, Figma } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center pt-20 pb-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative mb-6 w-20 h-20 bg-neutral-800 rounded-full overflow-hidden animate-fade-in">
              {/* Profile Image Placeholder */}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Hello! I'm Olivia, a Brand and Visual Designer specializing in digital design for brand and web.
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              My passion is creating visually compelling designs for brands who are making a real impact. 
              I specialize in creative direction, visual identity design, UI/UX, and bringing graphics to life through motion design.
            </p>
            
            <div className="flex items-center space-x-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-muted transition-colors">
                <Figma className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
