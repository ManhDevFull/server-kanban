import mongoose, { Schema } from "mongoose";

const VariantSchema = new Schema({
    parentId: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    stock: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        min: 0
    },
    imgURL: {
        type: [String]
    },
    variantArray: {
        type: [{
            label: {
                type: String,
                required: true
            },
            value: {
                type: String,
                required: true
            },
        }],
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
    },
      updateAt: {
        type: Date,
        default: Date.now(),
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})
const VariantModel = mongoose.model('variant', VariantSchema)
export default VariantModel