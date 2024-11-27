import mongoose, { Schema } from "mongoose";

const supplierScheme = new Schema({
    name:{
        type: String,
        required: true
    },
    product:{
        type: String,
    },
    categories:{
        type:[String],
    },
    price:{
        type: Number,
    },
    contact:{
        type: String,
    },
    isTaking:{
        type: Number,
        default: 0,
        enum: [0, 1]
    },
    photoURL:{
        type: String,
    },
    creaetAt:{
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    },
})
const SupplierModel = mongoose.model('suppliers', supplierScheme)
export default SupplierModel