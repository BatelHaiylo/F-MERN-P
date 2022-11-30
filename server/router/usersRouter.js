const usersRouter = require('express').Router()
const {getUsers,getUserById,addUserToDB,updateUser,deleteUser} = require('../controllers/users');

usersRouter.get('/',getUsers);
usersRouter.get('/byId/:id',getUserById);
usersRouter.post('/add',addUserToDB);
usersRouter.put('/update/:id',updateUser);
usersRouter.delete('/delete/:id',deleteUser);

module.exports = usersRouter