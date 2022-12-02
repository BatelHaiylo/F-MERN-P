const ordersRouter = require('express').Router()
const { getOrders, getOrderById, addOrderToDB, updateOrder, deleteOrder } = require('../controllers/orders');

ordersRouter.get('/',getOrders);
ordersRouter.get('/byId/:id',getOrderById);
ordersRouter.post('/add',addOrderToDB);
ordersRouter.put('/update/:id',updateOrder);
ordersRouter.delete('/delete/:id',deleteOrder);

module.exports = ordersRouter