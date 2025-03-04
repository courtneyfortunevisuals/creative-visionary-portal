
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
  color?: string;
  slug: string;
  className?: string;
}

const ProjectCard = ({ 
  title, 
  category, 
  imageUrl, 
  color = 'bg-neutral-200', 
  slug,
  className 
}: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${slug}`} 
      className={cn(
        "block relative rounded-md overflow-hidden project-card group transition-all duration-300 h-full",
        className
      )}
    >
      <div 
        className={cn(
          "aspect-[4/3] w-full h-full overflow-hidden", 
          color
        )}
      >
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover animate-image-load opacity-0 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-xl">{title}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
