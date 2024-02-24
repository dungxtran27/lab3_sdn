import Category from "../model/category.js";
// create image
const getAllCategory = async () => {
  try {
    const cate = await Category.find().exec();
    return cate;
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default { getAllCategory };
//
