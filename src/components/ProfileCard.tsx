import { useState } from 'react';
import type { Skill } from './SkillBadge';
import { SkillBadge } from './SkillBadge';
type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  skills: Skill[];
};

export const ProfileCard = ({ name, role, avatarUrl, bio, skills }: ProfileCardProps) => {
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>

      <button 
        onClick={handleLike} 
        className={`like-button ${isLiked ? 'liked' : ''}`}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'} ({likes})
      </button>

      <div className="skills-section">
        <h4>Skills:</h4>
        {skills && skills.length > 0 ? (
          <div className="skills-list">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No skills added yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;