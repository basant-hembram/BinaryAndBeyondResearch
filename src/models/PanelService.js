import mongoose from 'mongoose';

const PanelServiceSchema = new mongoose.Schema(
  {
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image:       { type: String, required: true, trim: true },
    icon:        { type: String, trim: true, default: '' },
    slug:        { type: String, trim: true, default: '' },
  },
  { timestamps: true }
);

export default mongoose.models.PanelService ||
  mongoose.model('PanelService', PanelServiceSchema);
