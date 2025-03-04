
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-primary font-medium text-lg hover-underline">
              olivia.design
            </Link>
          </div>
          
          <nav className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-6 md:mb-0">
            <Link to="/projects" className="text-sm text-muted-foreground hover-underline">
              Projects
            </Link>
            <Link to="/resume" className="text-sm text-muted-foreground hover-underline">
              Resume
            </Link>
            <a href="#contact" className="text-sm text-muted-foreground hover-underline">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {currentYear} Olivia Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
