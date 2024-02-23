import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "product name required "],
    },
    description: {
      type: String,
      required: [true, "description required"],
    },
    images: {
      type: Schema.Types.ObjectId,
      ref: "images",
      require: false,
    },
    comments: {
      type: Schema.Types.ObjectId,
      ref: "comments",
      require: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);
export default Product;
