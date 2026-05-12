import { Project } from '../../../data/projects';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../../../../components/figma/ImageWithFallback';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <ImageWithFallback
          src={`https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80`}
          alt={project.title}
          className="project-image"
        />
        {project.featured && (
          <div className="project-featured-badge">
            Projet vedette
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Voir le site</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <Github className="w-4 h-4" />
              <span>Code source</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}