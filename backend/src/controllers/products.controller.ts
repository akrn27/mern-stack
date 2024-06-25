import productsModel from "../models/products.model";
import cloudinary from "../utils/cloudinary";

export const createProduct = async (req: any, res: any) => {
  try {
    const uploadedRes = await cloudinary.uploader.upload(req.file.path);
    const imageUrl = uploadedRes.secure_url || uploadedRes.url;

    const newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      qty: req.body.qty,
      image: imageUrl,
      categoryId: req.body.categoryId
    }

    const result = await productsModel.create(newProduct);
    res.status(201).json({
      data: result,
      message: "Create a product successfully",
    })
  } catch (error) {
    console.log('Error createeeee => ',error)
  }
}

export const getAllProducts = async (req: any, res: any) => {
  try {
    const result = await productsModel.find();
    res.status(200).json({
      data: result,
      message: "Get all products successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOne({ _id: req.params.id });
    res.status(200).json({
      data: result,
      message: "Get a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).json({
      data: result,
      message: "Update a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (req: any, res: any) => {
  try {
    const result = await productsModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      data: result,
      message: "Delete a product successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
