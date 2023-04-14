import { Schema, model } from 'mongoose';

interface IProfile {
address: string;
email: string;
job: string;
name: string;
age: number;
phone: string;
facebook: string;
status: string;
avatar: string;
desc: string;
} 

const ProfileSchema = new Schema<IProfile>({
  address: { type: String },
  email: { type: String },
  job: { type: String },
  name: { type: String },
  age: { type: Number },
  phone: { type: String },
  facebook: { type: String },
  status: { type: String },
  avatar: { type: String },
  desc: { type: String },
});

const ProfileModel = model<IProfile>('Profile', ProfileSchema);

export default ProfileModel;
