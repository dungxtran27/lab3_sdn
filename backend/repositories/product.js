import Product from "../model/product.js";
const createProduct = async ({
  name,
  price,
  description,
  category,
  images,
}) => {
  try {
    const newProduct = await Product.create({
      name,
      price,
      description,
      category,
      images,
    });
    return newProduct;
  } catch (error) {
    throw new Error(error.toString());
  }
};
const getAll = async () => {
  try {
    const products = await Product.find()
      .populate("images", "url caption")
      // .populate("categories")
      .exec();
    return products;
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default { createProduct, getAll };
