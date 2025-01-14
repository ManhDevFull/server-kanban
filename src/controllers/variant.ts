import VariantModel from "../models/VariantModel"

const addVariant = async (req: any, res: any)=>{
    const body = req.body
    body.stock = parseInt(body.stock)
    body.price = parseInt(body.price)
    console.log(body)
    try {
        const item = new VariantModel(body);
        await item.save();
        res.status(200).json({
            message: 'Add new variant success',
            data: item,
            action: 'add'
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
            data: []
        })
    }
}
const updateVariant = async (req: any, res: any)=>{
    const body = req.body;
  const { id } = req.query;
  try {
    const item = await VariantModel.findByIdAndUpdate(id, body,{ new: true })
        res.status(200).json({
            message: 'Update variant success',
            data: item,
            action: 'update'
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
            data: []
        })
    }
}
const deleteVariant = async (req: any, res: any)=>{
    const id = req.query
    try {
        await VariantModel.findByIdAndUpdate(id, {isDeleted: true})
        res.status(200).json({
            message: 'Delete variant success',
            data: [],
            action: 'delete'
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
            data: []
        })
    }
}
export {
    addVariant,
    updateVariant,
    deleteVariant
}