const OrderModel = require("../../models/order");

async function create(req, res) {
  try {
        await OrderModel.create({ lineItems: req.body.lineItems})
        let updated = await OrderModel.find({})
        res.status(200).json(updated);
  } catch (err) {
    res.json(err.message);
  }
}

module.exports = {
  create,
};
