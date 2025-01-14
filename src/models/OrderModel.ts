import mongoose, { Schema } from "mongoose";

const orderScheme = new Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true,
  },
  customer: {
    type: String,
  },
  shippingAddress: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
  },
  products: [
    {
      productId: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Processing", "Completed", "Cancelled"],
    default: "Pending",
  },
  orderDate: {
    type: Date,
    default: Date.now(),
  },
  deliveryDate: {
    type: Date,
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["Credit Card", "PayPal", "Cash on Delivery"],
  },
  notes: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
const OrderModel = mongoose.model("orders", orderScheme);
export default OrderModel;
