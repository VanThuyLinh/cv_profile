import { Schema, model } from 'mongoose';

interface ISkill {
  name: string;
  percent: string;
} 

const SkillSchema = new Schema<ISkill>({
  name: { type: String },
  percent: { type: String },
});

const SkillModel = model<ISkill>('Skill', SkillSchema);

export default SkillModel;
