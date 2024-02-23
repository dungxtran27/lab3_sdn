import Image from "../model/image.js";
// create image
const createImage = async ({ url, caption, size }) => {
  try {
    const newImage = await Image.create({
      url,
      caption,
      size,
    });
    console.log(newImage._id);
    return newImage._id.toString();
  } catch (error) {
    throw new Error(error.toString());
  }
};
export default { createImage };
//
