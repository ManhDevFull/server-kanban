import ProductModel from "../models/ProductModel";
import VariantModel from "../models/VariantModel";

const getProducts = async (req: any, res: any) => {
  const { page } = req.query;
  try {
    const skip = (page - 1) * 10;
    const items = await ProductModel.find({ isDeleted: false })
      .skip(skip)
      .limit(10);
    const total = await ProductModel.countDocuments();
    res.status(200).json({
      message: "Get products successfully",
      data: { items, total },
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const addProduct = async (req: any, res: any) => {
  try {
    const body = req.body;
    const item = new ProductModel(body);
    await item.save();
    res.status(200).json({
      message: "Add new product successfully",
      data: item,
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const updateProduct = async (req: any, res: any) => {
  const body = req.body;
  const { id } = req.query;
  try {
    await ProductModel.findByIdAndUpdate(id, body);
    res.status(200).json({
      message: "Update product successfully",
      data: [],
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const deleteProduct = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    await ProductModel.findByIdAndUpdate(id, { isDeleted: true });
    res.status(200).json({
      message: "Delete product success",
      data: [],
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const getDetails = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const item = await ProductModel.findOne({ _id: id });
    const variants: any = await VariantModel.find({ parentId: id, isDeleted: false }).lean();
    console.log(variants)
    res.status(200).json({
      message: "Get a product success",
      data: {item,variants}
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
export { 
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getDetails
};
