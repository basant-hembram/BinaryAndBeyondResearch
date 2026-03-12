import mongoose from 'mongoose';

const OurWorkSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    image:       { type: String, required: true, trim: true },
    description: { type: String, trim: true, default: '' },
    order:       { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.OurWork ||
  mongoose.model('OurWork', OurWorkSchema);
