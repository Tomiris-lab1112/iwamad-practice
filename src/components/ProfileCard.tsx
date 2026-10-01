import type { Skill } from './SkillBadge';
import { SkillBadge } from './SkillBadge';
import LikeButton from './LikeButton';

type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  skills: Skill[];
};

export const ProfileCard = ({ name, role, avatarUrl, bio, skills }: ProfileCardProps) => {
  return (
    <div className="profile-card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>

      {/* Вставляем нашу новую общую кнопку из LikesContext */}
      <LikeButton />

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