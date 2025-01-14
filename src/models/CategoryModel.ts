import mongoose, { Schema } from "mongoose";
const CategorySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    slug:{
        type: String
    },
    parentId: {
        type: String,
        default: '',
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    updateAt:{
        type: Date,
        default: Date.now()
    }
})
const CategoryModel = mongoose.model('categorys', CategorySchema)
export default CategoryModel