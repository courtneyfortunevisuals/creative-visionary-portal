
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowDownCircle, BriefcaseBusiness, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">Resume</h1>
              <p className="text-lg text-muted-foreground">
                Art Director & Senior Graphic Designer
              </p>
            </div>
            
            <a 
              href="#" 
              className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md transition-all hover:bg-primary/90"
            >
              <ArrowDownCircle className="w-5 h-5" />
              Download PDF
            </a>
          </div>
          
          <div className="space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <BriefcaseBusiness className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Experience</h2>
              </div>
              
              <div className="space-y-12">
                <div className="border-l-2 border-muted pl-6 py-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium">Senior Graphic Designer</h3>
                    <span className="text-sm text-muted-foreground">2020 - Present</span>
                  </div>
                  <p className="text-primary mb-2">Creative Tech Agency</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Led creative strategy and visual identity development for major brand campaigns</li>
                    <li>Collaborated with cross-functional teams to create cohesive marketing materials</li>
                    <li>Directed photoshoots and video production to ensure brand consistency</li>
                    <li>Mentored junior designers and provided art direction across multiple projects</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-muted pl-6 py-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium">Art Director</h3>
                    <span className="text-sm text-muted-foreground">2017 - 2020</span>
                  </div>
                  <p className="text-primary mb-2">Design Studio</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Developed creative concepts and visual style guides for diverse clients</li>
                    <li>Oversaw production of print and digital media for national campaigns</li>
                    <li>Created motion graphics and video content for social media platforms</li>
                    <li>Presented creative concepts to clients and incorporated feedback into final designs</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-muted pl-6 py-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium">Graphic Designer</h3>
                    <span className="text-sm text-muted-foreground">2014 - 2017</span>
                  </div>
                  <p className="text-primary mb-2">Marketing Agency</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Created visual assets for digital and print advertising campaigns</li>
                    <li>Designed user interfaces for web and mobile applications</li>
                    <li>Produced marketing collateral including brochures, presentations, and trade show materials</li>
                    <li>Collaborated with copywriters to develop engaging content for social media</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Education</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-muted pl-6 py-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium">Master of Fine Arts in Graphic Design</h3>
                    <span className="text-sm text-muted-foreground">2012 - 2014</span>
                  </div>
                  <p className="text-primary">Rhode Island School of Design</p>
                </div>
                
                <div className="border-l-2 border-muted pl-6 py-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-xl font-medium">Bachelor of Arts in Visual Communication</h3>
                    <span className="text-sm text-muted-foreground">2008 - 2012</span>
                  </div>
                  <p className="text-primary">California Institute of the Arts</p>
                </div>
              </div>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6" />
                <h2 className="text-2xl font-semibold">Skills</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Design</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Art Direction</li>
                    <li>Brand Identity Design</li>
                    <li>UI/UX Design</li>
                    <li>Typography</li>
                    <li>Print Design</li>
                    <li>Motion Graphics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Technical</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Adobe Creative Suite</li>
                    <li>Figma</li>
                    <li>After Effects</li>
                    <li>Cinema 4D</li>
                    <li>HTML/CSS</li>
                    <li>Sketch</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Resume;
