
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowDownCircle, BriefcaseBusiness, GraduationCap, Award, Check } from 'lucide-react';

const Resume = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          {/* About Me Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">About Me</h1>
            <p className="text-gray-700 mb-4">
              A highly innovative and meticulous Digital Designer with over six 
              years of experience in the marketing and advertising industry. 
              Skilled in creating unique solutions for both print and digital media, 
              specializing in branding, layout design, and front-end web 
              development. Proven success in driving engagement through 
              compelling visual storytelling and smooth project execution.
            </p>
            <p className="text-gray-700 mb-4">
              Acclaimed for excellent teamwork, time management, and 
              communication skills, consistently delivering superior work that 
              surpasses client expectations. Certified in Graphic Design and Web 
              Development, and holder of the esteemed Meta Front-End 
              Developer Certificate, demonstrating expertise in advanced web 
              technologies. Dedicated to staying ahead of design trends and 
              using skills to enhance brand presence and achieve business goals.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors mt-4"
            >
              <ArrowDownCircle className="w-5 h-5" />
              Download Resume as PDF
            </a>
          </div>
          
          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <ul className="space-y-5">
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <div>
                  <h3 className="font-semibold">Heathfield High School</h3>
                  <p className="text-gray-600">Matric</p>
                </div>
              </li>
              <li className="flex gap-2">
                <span className="text-gray-700">•</span>
                <div>
                  <h3 className="font-semibold">Rosebank College</h3>
                  <p className="text-gray-600">Diploma in Graphic Design and Web Development</p>
                  <ul className="mt-2 ml-4 space-y-1">
                    <li className="flex gap-2 items-start text-sm text-gray-600">
                      <span>•</span>
                      <p>Capstone Project: "Just4You" - Go (Goldfields Employment Certificate)</p>
                    </li>
                    <li className="flex gap-2 items-start text-sm text-gray-600">
                      <span>•</span>
                      <p>"Relevant Coursework: Google Start (Yr 1)/Design Process: Empathize, Define, and Ideate"</p>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Experience</h2>
            <ul className="space-y-8">
              <li>
                <h3 className="font-semibold">Designer & Studio Specialist, Sprout Performance Partners, CPT, 2016 – 2024</h3>
                <ul className="mt-3 ml-4 space-y-2">
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Oversee the execution of HTML5 digital banner roll-outs utilizing Google Web Designer, ensuring alignment with brand standards and project timelines.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Manage the creation and updates of internal brand materials to maintain a cohesive and professional company image.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Design, develop, and update company email signatures, ensuring they are consistent with brand guidelines and incorporate the latest design trends and best practices.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Create engaging social media creatives, maintaining consistency with the brand's visual identity, and effectively driving engagement across platforms.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Develop marketing creatives for Google Marketing Platform, aligning with campaign objectives and maximizing impact through targeted digital advertising strategies.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Conduct demos and test dynamic remarketing campaigns to enhance personalization and improve the effectiveness of advertising efforts.</p>
                  </li>
                </ul>
              </li>
              
              <li>
                <h3 className="font-semibold">Junior Graphic Designer, Caravan Publications, CPT, July 2015 - March 2016</h3>
                <ul className="mt-3 ml-4 space-y-2">
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Design and produce monthly magazine layouts using Adobe InDesign, ensuring each issue is visually compelling, cohesive, and aligns with the brand's identity and standards. Rigorously manage project timelines to consistently meet deadlines, guaranteeing timely publication and distribution of each magazine edition.</p>
                  </li>
                </ul>
              </li>
              
              <li>
                <h3 className="font-semibold">Graphic Design Intern to Junior Graphic Designer, the media chilli, CPT, January 2014 - June 2015</h3>
                <ul className="mt-3 ml-4 space-y-2">
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Collaborate with the Head of Design to complete annual reports and various print materials, ensuring they maintain high-quality design standards.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Work on report tenders for prominent clients, including the City of Cape Town and WWF, delivering comprehensive and visually appealing documents that meet their specific requirements.</p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <span className="text-gray-700">•</span>
                    <p className="text-gray-600">Actively engage in learning Joomla, enhancing proficiency to contribute more effectively to web development projects and expanding capabilities in content management systems.</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          
          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Management Skills</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Creativity</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Digital Marketing</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Negotiation</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Critical Thinking</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Leadership</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Branding</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Desktop Publishing</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Layout Design</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Animation</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Front-End Web Development</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Microsoft Office Suite</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>HTML5 Banner Creation</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Responsive Web Design</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>HTML, CSS & JavaScript</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>React</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Collaboration</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Time Management</p>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Communication</p>
              </div>
            </div>
          </div>
          
          {/* Personal Qualities Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Personal Qualities</h2>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Creative and innovative thinker with a keen eye for aesthetics.</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Strong communicator, capable of effectively articulating design concepts.</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Collaborative team player with a positive attitude.</p>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-gray-700">•</span>
                <p>Passionate about staying current with technology and design trends.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Resume;
