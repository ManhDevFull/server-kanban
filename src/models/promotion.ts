import mongoose, { Schema } from "mongoose"

const PromotionSchema = new Schema({
    "code": String,
    "discountType": String,
    "discountValue": Number,
    "startDate": {
        type: Date,
        default: Date.now()
    },
    "endDate": Date,
    "createdAt": {
        type: Date,
        default: Date.now()
    },
    "updatedAt": {
        type: Date,
        default: Date.now()
    },
})
    
const PromotionModel = mongoose.model('promotions', PromotionSchema)
export default PromotionModel