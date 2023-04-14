import { Schema, model } from 'mongoose';

interface IService {
  name: string;
  imageURL: string;
} 

const ServiceSchema = new Schema<IService>({
  name: { type: String },
  imageURL: { type: String },
});

const ServiceModel = model<IService>('Service', ServiceSchema);

export default ServiceModel;
