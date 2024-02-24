import { cateDAO } from "../repositories/index.js";
const getAllCate = async (req, res) => {
  const listCate = await cateDAO.getAllCategory();
  try {
    if (listCate.length > 0) {
      res.status(200).json(listCate);
    } else {
      res.status(404).json({
        message: "not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};
export default { getAllCate };
