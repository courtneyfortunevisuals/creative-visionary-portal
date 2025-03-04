
import React from 'react';
import ProjectCard from './ProjectCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  color?: string;
  slug: string;
}

interface ProjectGridProps {
  title: string;
  description?: string;
  projects: Project[];
  showViewAll?: boolean;
  columns?: number;
}

const ProjectGrid = ({ 
  title, 
  description, 
  projects, 
  showViewAll = true,
  columns = 3
}: ProjectGridProps) => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 md:gap-8`}>
          {projects.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              color={project.color}
              slug={project.slug}
            />
          ))}
        </div>
        
        {showViewAll && (
          <div className="mt-12 text-center">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary hover:underline group"
            >
              View all projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;
