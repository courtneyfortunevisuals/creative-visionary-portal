
import React from 'react';
import Navbar from '@/components/Navbar';
import ProjectGrid from '@/components/ProjectGrid';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const allProjects = [
  {
    id: '1',
    title: 'Rebranding',
    category: 'Branding for tech agency',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#1A1F2C]',
    slug: 'rebranding'
  },
  {
    id: '2',
    title: 'Creative Rollouts',
    category: 'Brand identity system',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#FF3366]',
    slug: 'creative-rollouts'
  },
  {
    id: '3',
    title: 'Brand Campaign',
    category: 'Digital & print media',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#E5DEFF]',
    slug: 'brand-campaign'
  },
  {
    id: '4',
    title: 'Dynamic Prospecting & Remarketing',
    category: 'UI/UX Design',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#F97316]',
    slug: 'dynamic-prospecting'
  },
  {
    id: '5',
    title: 'Social Media Marketing',
    category: 'Creative Direction',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#9b87f5]',
    slug: 'social-media'
  },
  {
    id: '6',
    title: 'Dr. James Anderson',
    category: 'Motion Graphics',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#222222]',
    slug: 'dr-james'
  },
  {
    id: '7',
    title: 'WORDS Kinetic Typography',
    category: 'Motion Design',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#222222]',
    slug: 'kinetic-typography'
  },
  {
    id: '8',
    title: 'E-commerce Redesign',
    category: 'UI/UX Design',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#7E69AB]',
    slug: 'ecommerce-redesign'
  },
  {
    id: '9',
    title: 'Digital Marketing Campaign',
    category: 'Social Media Design',
    imageUrl: '/placeholder.svg',
    color: 'bg-[#D6BCFA]',
    slug: 'marketing-campaign'
  }
];

const Projects = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            A collection of my work across branding, UI/UX design, art direction, and motion graphics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <div key={project.id} className="animate-scale-in" style={{ animationDelay: `${parseInt(project.id) * 0.1}s` }}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Projects;
