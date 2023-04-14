import { Schema, model } from 'mongoose';

interface IPortfolio {
  imageURL: string;
  job: string;
  desc: string;
  website: string;
} 

const PortfolioSchema = new Schema<IPortfolio>({
  imageURL: { type: String },
  job: { type: String },
  desc: { type: String },
  website: { type: String },
});

const PortfolioModel = model<IPortfolio>('Portfolio', PortfolioSchema);

export default PortfolioModel;
