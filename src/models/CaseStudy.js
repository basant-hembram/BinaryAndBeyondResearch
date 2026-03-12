import mongoose from 'mongoose';

const CaseStudySchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    image:       { type: String, required: true, trim: true },
    slug:        { type: String, trim: true, default: '' },
    category:    { type: String, trim: true, default: '' },
    description: { type: String, trim: true, default: '' },
    thumbnail:   { type: String, trim: true, default: '' },
    link:        { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

export default mongoose.models.CaseStudy ||
  mongoose.model('CaseStudy', CaseStudySchema);
