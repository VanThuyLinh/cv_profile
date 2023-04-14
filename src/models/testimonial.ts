import { Schema, model } from 'mongoose';

interface ITestimonials {
  desc: string;
  name: string;
  job: string;
  imageURL: string;
} 

const TestimonialsSchema = new Schema<ITestimonials>({
  desc: { type: String },
  name: { type: String },
  job: { type: String },
  imageURL: { type: String },
});

const TestimonialsModel = model<ITestimonials>('Testimonials', TestimonialsSchema);

export default TestimonialsModel;
