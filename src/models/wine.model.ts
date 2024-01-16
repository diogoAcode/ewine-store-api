import mongoose, { Schema, Document } from "mongoose";

interface Iwine extends Document {
  wine_title: string;
  wine_description: string;
  wine_price: number;
  wine_category: string;
  wine_image: string;
  wine_rate: number;
  wine_count: number;
}

const wineSchema = new Schema({
  wine_title: { type: String, required: true },
  wine_description: { type: String, required: true },
  wine_price: { type: Number, required: true },
  wine_category: { type: String, required: true },
  wine_image: { type: String, required: true },
  wine_rate: { type: Number, required: true },
  wine_count: { type: Number, required: true },
});

const wine = mongoose.model<Iwine>("wine", wineSchema);

export default wine;
