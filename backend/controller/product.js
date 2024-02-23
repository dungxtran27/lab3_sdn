import Product from "../model/product.js";
import { productDAO, imageDAO } from "../repositories/index.js";

const createProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  try {
    const imageIDs = (
      await Promise.all(
        req.body.images.map((image) => {
          return imageDAO.createImage({
            url: image.imageBase64,
            caption: image.imageName,
            size: image.imageSize,
          });
        })
      )
    ).flat();
    const newProduct = await productDAO.createProduct({
      name,
      price,
      description,
      category,
      images: imageIDs,
    });
    res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json({
      error: error.toString(),
    });
  }
};
const getAll = async (req, res) => {
  const listProduct = await productDAO.getAll();
  try {
    if (listProduct.length > 0) {
      res.status(200).json(listProduct);
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
export default { createProduct, getAll };
