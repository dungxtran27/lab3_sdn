import Comment from "../model/comment.js";
import Product from "../model/product.js";
// create image
const getAllCommentByProductID = async (id) => {
  try {
    const cate = await Comment.find().exec();
    return cate;
  } catch (error) {
    throw new Error(error.toString());
  }
};
const createComment = async (content) => {
  try {
    const newComment = await Comment.create({
      text: content,
      rate: 0, // You can set the rate as needed
      author: "Example Author",
    });

    return newComment;
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default { getAllCommentByProductID, createComment };
//
