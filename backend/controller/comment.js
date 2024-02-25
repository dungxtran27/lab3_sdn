import { cmtDAO } from "../repositories/index.js";
import { productDAO } from "../repositories/index.js";
const createComment = async (req, res) => {
  const { content, pid } = req.body;
  try {
    const product = await productDAO.getProductByID(pid);
    if (!product) {
      res.status(404).json({ message: "khong co prodct nay b oi" });
      return;
    }
    const newComment = await cmtDAO.createComment(content);
    const updatedProduct = await productDAO.addCommentToProduct(
      pid,
      newComment
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default { createComment };
