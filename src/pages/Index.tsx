
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const featuredProjects = [
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
  }
];

const otherProjects = [
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
  }
];

const motionProjects = [
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
  }
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div className="py-8">
        <ProjectGrid 
          title="Selected projects"
          description="Explore my portfolio of projects, showcasing my dedication to innovative and impactful design."
          projects={featuredProjects}
        />
        
        <div className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold mb-4">My graduation project</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A behind-the-scenes look at my capstone project, showcasing my evolution as a designer and creative thinker from my early creative roots.
              </p>
              <a href="#" className="font-medium hover-underline">Read case study</a>
            </div>
          </div>
        </div>
        
        <ProjectGrid 
          title="Selected projects"
          description="Explore my portfolio of projects, showcasing my dedication to innovative and impactful design."
          projects={otherProjects}
        />
        
        <ProjectGrid 
          title="Motion Design"
          description="Moving images and stories: from concepts and storyboards to finalized motion graphics."
          projects={motionProjects}
        />
      </div>
      
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
