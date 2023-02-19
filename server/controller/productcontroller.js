import Product from "../model/product-schema.js";

export const getProducts = async (request, response) => {
  try {
    let products = await Product.find({});

    return response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
export const getProductDetails = async (request, response) => {
  try {
    const id = request.params.id;
    let product = await Product.findOne({ id: id });

    return response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
