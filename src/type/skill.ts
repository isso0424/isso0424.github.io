export interface Skill {
  name: string;
  imageURL?: string;
}

export interface SkillCategory {
  category: string;
  skills: Array<Skill>;
}
