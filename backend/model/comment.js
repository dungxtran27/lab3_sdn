import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "text required "],
      unique: [true, "must be unique: text"],
    },
    rate: {
      type: Number,
      required: [false, "rate required"],
    },
    author: {
      type: String,
      required: [true, "author required"],
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("comments", categorySchema);
export default Category;
export { commentSchema };
