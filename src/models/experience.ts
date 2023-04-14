import { Schema, model } from 'mongoose';

interface IExperience {
  name: string;
  company: string;
  startDate: number;
  endDate: number;
  imageURL: string;
  desc: string;
  } 
const ExperienceSchema = new Schema<IExperience>({
  name: { type: String },
  company: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  imageURL: { type: String },
  desc: { type: String },
});

const ExperienceModel = model<IExperience>('Experience', ExperienceSchema);

export default ExperienceModel;
