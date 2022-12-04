const ordersRouter = require('express').Router()
const { getOrders, getOrderById, addOrderToDB, updateOrder, deleteOrder, getOrderByParam, getHighPriceOrders } = require('../controllers/orders');

ordersRouter.get('/',getOrders);
ordersRouter.get('/byId/:id',getOrderById);
ordersRouter.get('/byParam/:param',getOrderByParam);
ordersRouter.get('/HighPrice',getHighPriceOrders);
ordersRouter.post('/add',addOrderToDB);
ordersRouter.put('/update/:id',updateOrder);
ordersRouter.delete('/delete/:id',deleteOrder);

module.exports = ordersRouter