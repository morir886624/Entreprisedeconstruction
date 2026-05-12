import { Experience } from '../../../data/experiences';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import './ExperienceCard.css';

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{experience.title}</h3>
          <div className="experience-company">{experience.company}</div>
        </div>
      </div>
      
      <div className="experience-meta">
        <div className="experience-meta-item">
          <Calendar className="w-4 h-4" />
          <span>{experience.period}</span>
        </div>
        <div className="experience-meta-item">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
      </div>

      <p className="experience-description">{experience.description}</p>

      <div className="experience-achievements">
        <div className="achievement-header">
          <TrendingUp className="w-4 h-4" />
          <span>Réalisations</span>
        </div>
        <ul className="achievement-list">
          {experience.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>

      <div className="experience-technologies">
        {experience.technologies.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
}
