const mongoose = require('mongoose');
var slug = require('mongoose-slug-updater')
mongoose.plugin(slug);
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    slug: "name",
    unique: true
},
  description: {
    type: String,
  },
  category: [String],
  imageUrl: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const ProductModel = mongoose.model('products', productSchema);

export default ProductModel;