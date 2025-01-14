import CategoryModel from "../models/CategoryModel";
import ProductModel from "../models/ProductModel";
const getCategory = async (req: any, res: any) => {
  try {
    const items: any = await CategoryModel.find({});
    res.status(200).json({
      message: "Get categories successfully",
      data: items
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      data: [],
    });
  }
};
const addCategory = async (req: any, res: any) => {
  const body = req.body;
  try {
    const findCate = await CategoryModel.findOne({
      parentId: body.parentId,
      slug: body.slug
    })
    if(findCate){
      return res.status(400).json({
        message: 'Categody is existing',
        data: [],
      });
    }
    const newCategory = new CategoryModel(body);
    newCategory.save();
    res.status(200).json({
      message: "Add new categories successfully",
      data: newCategory,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
      data: [],
    });
  }
};
const updateCategory = async (req: any, res: any) => {
  const body = req.body;
  const { id } = req.query;
  try {
    await CategoryModel.findByIdAndUpdate(id, body);
    res.status(200).json({
      message: "Update category successfully",
      data: [],
    });
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const deleteCategory = async (req: any, res: any) => {
  const { id } = req.query;
  try {
    const products = await ProductModel.find({ category: { $all: id}})
    if(products && products.length > 0 ) {
      products.forEach(async (item : any) => {
        const cate = item._doc.category
        const index = cate.findIndex((element: string)=> element === id)
        if(index !== -1){
          cate.splice(index, 1)
        }
        await ProductModel.findByIdAndUpdate(item._id, {
          category: cate
        })
      });
    }
    await CategoryModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Delete category successfully",
      data: [],
    })
  } catch (error: any) {
    res.status(404).json({
      message: error.message,
      data: [],
    });
  }
};
const getOneCategory = async(req: any, res: any)=> {
  const {id} = req.query
  try{
    const cat = await CategoryModel.findOne({_id: id})
    res.status(200).json({
      message: 'Find one category success',
      data: cat
    })
  } catch (error: any){
    res.status(404).json({
      message: error.message,
      data:[]
    })
  }
}
export { getCategory, getOneCategory, addCategory, deleteCategory, updateCategory };
