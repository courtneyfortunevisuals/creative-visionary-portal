
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { ArrowDownCircle, BriefcaseBusiness, GraduationCap, Award, Phone, Mail, Globe, User } from 'lucide-react';

const Resume = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Left Column - Profile */}
            <div className="bg-blue-500 text-white p-8">
              <div className="flex flex-col items-center mb-10">
                <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden mb-6">
                  <img 
                    src="/lovable-uploads/875bfef8-4b33-4caa-bcb1-66d0f7d11bf5.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-4xl font-bold text-center mb-1">Courtney Fortune</h1>
                <p className="text-lg mb-6">Founder and Designer</p>
              </div>

              {/* Contact */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Contact
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0" />
                    <span>+27-071-2202-068</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0" />
                    <span className="break-all">courtneyfortunevisuals@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 flex-shrink-0" />
                    <div className="flex flex-col">
                      <a href="https://courtneyfortunevisuals.com" className="hover:underline">https://courtneyfortunevisuals.com</a>
                      <span className="text-sm">password: portfolio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  About Me
                </h2>
                <p className="text-sm leading-relaxed">
                  A highly innovative and meticulous Digital Designer with over six years
                  of experience in the marketing and advertising industry. Skilled in
                  creating unique solutions for both print and digital media, specializing in
                  branding, layout design, and front-end web development. Proven success in
                  driving engagement through compelling visual storytelling
                  and smooth project execution.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Acclaimed for excellent teamwork, time management, and
                  communication skills, consistently delivering superior work that
                  surpasses client expectations. Certified in Graphic Design and Web
                  Development, and holder of the esteemed Meta Front-End Developer
                  Certificate, demonstrating expertise in advanced web technologies.
                </p>
                <p className="text-sm leading-relaxed mt-4">
                  Dedicated to staying ahead of design trends and using skills to
                  enhance brand presence and achieve business goals.
                </p>
              </div>
            </div>

            {/* Right Column - Experience, Education, Skills */}
            <div className="col-span-2 p-8">
              {/* Education Section */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4 border-b pb-2">
                  <GraduationCap className="w-6 h-6 text-gray-500" />
                  <h2 className="text-2xl font-semibold text-gray-700">Education</h2>
                </div>
                
                <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-10 before:w-[2px] before:bg-blue-200">
                  <div className="mb-8 relative">
                    <div className="absolute left-[-14px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium">Heathfield High School</h3>
                        <p className="text-gray-500">Matric</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">2005 - 2008</span>
                    </div>
                  </div>
                  
                  <div className="mb-8 relative">
                    <div className="absolute left-[-14px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <h3 className="text-xl font-medium">Rosebank College</h3>
                        <p className="text-gray-500">Diploma in Graphic Design and Web Development</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">2011 - 2012</span>
                    </div>
                  </div>
                </div>
              </section>
              
              {/* Experience Section */}
              <section className="mb-12">
                <div className="flex items-center gap-3 mb-4 border-b pb-2">
                  <BriefcaseBusiness className="w-6 h-6 text-gray-500" />
                  <h2 className="text-2xl font-semibold text-gray-700">Experience</h2>
                </div>
                
                <div className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-10 before:w-[2px] before:bg-blue-200">
                  <div className="mb-10 relative">
                    <div className="absolute left-[-14px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-medium">Designer & Studio Specialist</h3>
                        <p className="text-gray-500">Sprout Performance Partners</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">2016 - 2024</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 mt-3">
                      <li>Oversee the execution of HTML5 digital banner roll-outs utilizing Google Web Designer, ensuring alignment with brand standards and project timelines.</li>
                      <li>Manage the creation and updates of internal brand materials to maintain a cohesive and professional company image.</li>
                      <li>Design, develop, and update company email signatures, ensuring they are consistent with brand guidelines and incorporate the latest design trends and best practices.</li>
                      <li>Create engaging social media creatives, maintaining consistency with the brand's visual identity and effectively driving engagement across platforms.</li>
                      <li>Develop marketing creatives for Google Marketing Platform, aligning with campaign objectives and maximizing impact through targeted digital advertising strategies.</li>
                      <li>Conduct demos and test dynamic remarketing campaigns to enhance personalization and improve the effectiveness of advertising efforts.</li>
                    </ul>
                  </div>
                  
                  <div className="mb-10 relative">
                    <div className="absolute left-[-14px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-medium">Junior Graphic Designer</h3>
                        <p className="text-gray-500">Caravan Publications</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">2016 - 2015</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 mt-3">
                      <li>Design and produce monthly magazine layouts using Adobe InDesign.</li>
                      <li>Ensure each issue is visually compelling, cohesive, and aligns with the brand's identity and standards.</li>
                      <li>Rigorously manage project timelines to consistently meet deadlines, guaranteeing timely publication and distribution of each magazine edition.</li>
                    </ul>
                  </div>
                  
                  <div className="mb-8 relative">
                    <div className="absolute left-[-14px] top-2 w-5 h-5 rounded-full bg-blue-500 border-4 border-white"></div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-medium">Junior Graphic Designer</h3>
                        <p className="text-gray-500">themediachilli</p>
                      </div>
                      <span className="text-sm text-gray-500 mt-1 md:mt-0">2014 - 2015</span>
                    </div>
                    <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2 mt-3">
                      <li>Collaborate with the Head of Design to complete annual reports and various print materials, ensuring high-quality outcomes that align with brand guidelines and project timelines.</li>
                      <li>Work on report tenders for prominent clients, including the City of Cape Town and WWF, delivering comprehensive and visually appealing documents that meet their specific requirements.</li>
                      <li>Actively engage in learning Joomla, enhancing proficiency to contribute more effectively to web development projects and expanding capabilities in content management systems.</li>
                    </ul>
                  </div>
                </div>
              </section>
              
              {/* Skills Section */}
              <section>
                <div className="flex items-center gap-3 mb-6 border-b pb-2">
                  <Award className="w-6 h-6 text-gray-500" />
                  <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2">
                    <li>Management Skills</li>
                    <li>Creativity</li>
                    <li>Digital Marketing</li>
                    <li>Negotiation</li>
                    <li>Critical Thinking</li>
                    <li>Leadership</li>
                    <li>Branding</li>
                    <li>Desktop Publishing</li>
                    <li>Layout Design</li>
                    <li>Animation</li>
                  </ul>
                  
                  <ul className="list-disc list-outside ml-5 text-gray-600 space-y-2">
                    <li>Front-End Web Development</li>
                    <li>Adobe Creative Suite (Photoshop, Illustrator, InDesign)</li>
                    <li>Microsoft Office Suite</li>
                    <li>HTML5 Banner Creation</li>
                    <li>Responsive Web Design</li>
                    <li>HTML, CSS & JavaScript</li>
                    <li>React</li>
                    <li>Collaboration</li>
                    <li>Time Management</li>
                    <li>Communication</li>
                  </ul>
                </div>
                
                <div className="mt-12 flex justify-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md transition-all hover:bg-blue-600 hover:shadow-md"
                  >
                    <ArrowDownCircle className="w-5 h-5" />
                    Download Complete CV
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Resume;
