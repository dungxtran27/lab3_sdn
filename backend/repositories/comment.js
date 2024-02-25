import Comment from "../model/comment.js";
// create image

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
export default { createComment };
//
