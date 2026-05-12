import { useState } from 'react';
import { skillIcons } from '../../../constants/icons';
import './SkillCard.css';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`skill-card ${isHovered ? 'hovered' : ''}`}
    >
      <div className="skill-card-icon-wrapper">
        <img 
          src={skillIcons[skill.icon] || skillIcons.react} 
          alt={skill.name}
          className="skill-card-icon"
        />
      </div>
      <h3 className="skill-card-name">
        {skill.name}
      </h3>
    </div>
  );
}
