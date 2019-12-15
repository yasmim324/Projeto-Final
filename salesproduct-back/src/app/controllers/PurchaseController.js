const Product = require("../models/Product");
const User = require("../models/User");

class PurchaseController {
  async store(req, res) {
    const { product, content } = req.body;

    const purchaseProduct = await Product.findById(product).populate(
      "salesman"
    );
    const user = await User.findById(req.userId);
  }
}

module.exports = new PurchaseController();
