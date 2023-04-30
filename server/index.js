import express from "express";
import colors from "colors";
import morgan from "morgan";
import 'dotenv/config';
import connectDB from "./config/db.js"
import userRoutes from './routes/userRoutes.js'
import cors from "cors"
//Rest Object
const app = express();

//MongoDb Connection
connectDB();

//middlewares
app.use(express.json())
app.use(morgan('dev'));
app.use(cors())

//Routes
//app.use('/api/v1/user', require('./routes/userRoutes.js'))
app.use('/api/v1/user', userRoutes)



app.get('/',(req,res)=>{
    res.status(200).send({
        message:"Server Running"
    })
})
const port=process.env.PORT || 8000;
app.listen( port , () =>{
    console.log(`App is running in ${process.env.DEV_MODE} on port : ${port}`.bgCyan.white);
})