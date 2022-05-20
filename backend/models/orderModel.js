const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");

const orderSchema = mongodb.Schema({
  user: {
    type: mongodb.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: String, required: true },
      image: { type: String, required: true },
      price: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    },
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  shippingtaxPrice: {
    type: Number,
    required: true,
    default: 0.0,
  },
  totalPrice:{
    type:Number,
    required:true,
    default:0.0
},
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },

  isDelivered: {
    type: Boolean,
    required: true,
    default:false
},
deliveredAt: {
    type: Date,
  },

  timestamps: true,
});

const Order = mongodb.model("Order", orderSchema);

module.exports = Order;
