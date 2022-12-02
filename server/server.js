const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
require('./db/db');
const passport = require('passport')
require('./config/passport')(passport)

const clothingRouter = require('./router/clothingRouter');
const usersRouter = require('./router/usersRouter');
const purchasesRouter = require('./router/purchasesRouter')

const Port = process.env.PORT

app.use(cors())
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/api/users', usersRouter)
app.use('/api/purchases', purchasesRouter)
app.use('/api/clothes', clothingRouter)

app.get('/',(req,res)=>{
    res.send("got your request")
})

app.listen(Port, ()=>{
    console.log(`server listen in port: ${Port}`);
})

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('*', (req,res)=>{
//         res.sendFile(path.join(__dirname, '..client/build', 'index.html'))
//     })
// }