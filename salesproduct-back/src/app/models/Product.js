const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  salesman: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

Product.plugin(mongoosePaginate);

module.exports = mongoose.model("Product", Product);
