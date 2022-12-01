const usersRouter = require('express').Router()
const {getUsers,getUserById,addUserToDB,updateUser,deleteUser} = require('../controllers/users');
const {signUp,signIn} = require('../middleware/app-access')

usersRouter.get('/',getUsers);
usersRouter.get('/byId/:id',getUserById);
usersRouter.post('/add',addUserToDB);
usersRouter.put('/update/:id',updateUser);
usersRouter.delete('/delete/:id',deleteUser);
usersRouter.post('/signup', signUp)
usersRouter.post('signin', signIn)

module.exports = usersRouter