import mongoose from 'mongoose';

export const connect = () => {
  mongoose
    .connect('mongodb://localhost:27017/thuylinh')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not connected!!'));
};
