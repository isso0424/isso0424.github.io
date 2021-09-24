export interface Skill {
  name: string;
  imageURL?: string;
  width: number;
  height: number;
}

export interface SkillCategory {
  category: string;
  skills: Array<Skill>;
}
