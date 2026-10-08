import { Tag } from './ui/Tag';

export type Skill = {
  id: number;
  label: string;
};

type SkillBadgeProps = {
  skill: Skill;
};

export const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return <Tag label={skill.label} />;
};

export default SkillBadge;