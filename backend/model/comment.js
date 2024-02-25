import mongoose, { Schema } from "mongoose";
const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "text required "],
      unique: [false],
    },
    rate: {
      type: Number,
      required: [false],
    },
    author: {
      type: String,
      required: [true, "author required"],
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("comments", commentSchema);
export default Comment;
export { commentSchema };
