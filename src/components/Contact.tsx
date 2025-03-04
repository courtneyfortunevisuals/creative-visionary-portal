
import React from 'react';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Interested in connecting?</h2>
          <p className="text-muted-foreground mb-8">
            Let's talk about collaboration opportunities, or anything design related!
          </p>
          
          <a 
            href="mailto:hello@olivia.design" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md transition-all hover:bg-primary/90 hover:translate-y-[-2px]"
          >
            <Mail className="w-5 h-5" />
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
