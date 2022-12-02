const OrderModal = require("../modals/Orders_Schema");

const getOrders = async (req, res) => {
  await OrderModal.find({}).populate("orderNumber").populate("product")
    .then((orders) => {
      orders.length == 0
        ? res.status(300).json({ success: false, message: "no orders was found" })
        : res.status(200).json({ success: true, orders });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
};

const getOrderById = async (req, res) => {
  await OrderModal.findById(req.params.id)
    .then((result) => {
      return !result
        ? res.status(200).json({ successes: true }, result)
        : res.status(300).json({ successes: false, msg: "no order was found" });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const addNewOrder = async (req, res) => {
  await OrderModal.create(req.body.order)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const addOrderToDB = async (req, res) => {
  await OrderModal.insertMany(req.body.order)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const updateOrder = async (req, res) => {
  await OrderModal.findByIdAndUpdate(req.params.id, req.body.order)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

const deleteAOrder = async (req, res) => {
  await OrderModal.where("email")
    .equals(req.body.order.email)
    .remove()
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};
const deleteOrder = async (req, res) => {
  await OrderModal.findByIdAndRemove(req.params.id, req.body.order)
    .then((result) => {
      return res.status(200).json({ successes: true, result });
    })
    .catch((error) => res.status(400).json({ successes: false, error }));
};

module.exports = { getOrders, getOrderById, addOrderToDB, updateOrder, deleteOrder };