import mongoose, { Schema } from "mongoose";

const ReviewSchema = new Schema({
  productId: String,
  customerId: String,
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  comment: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: { 
    type: Date,
    default: Date.now()
 },
});
const ReviewModel = mongoose.model("reviews", ReviewSchema);
export default ReviewModel;
