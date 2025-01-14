import OrderModel from "../models/OrderModel";

const getOrder = async (req: any, res: any)=> {
        const { page } = req.query;
        try {
          const skip = (page - 1) * 10;
          const items = await OrderModel.find({ isDeleted: false })
            .skip(skip)
            .limit(10);
          const total = await OrderModel.countDocuments();
        res.status(200).json({
            message: 'Get orders successfully',
            data: {items, total}
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.mesgase,
            data:[]
        })
        
    }
}
const addNewOrder = async (req:any, res:any)=>{
    const { id } = req.query;
        const body = req.body;
    try {
        const newOrder: any = new OrderModel(body);
        newOrder.customerID = id
        await newOrder.save()
        console.log(newOrder)
        res.status(200).json({
            message: 'Add new order successfully',
            data: newOrder
        })
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        })
    }
}
export {getOrder, addNewOrder}