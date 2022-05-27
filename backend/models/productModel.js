const mongodb = require("mongoose");


const reviewSchema = mongodb.Schema({
  name: { type: String, requred: true },
  rating: { type: Number, requred: true },
  comment: { type: String, requred: true },
});

const productSchema = mongodb.Schema({
  user: {
    type: mongodb.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
  }
});

const Product = mongodb.model("Product", productSchema);
module.exports = Product;