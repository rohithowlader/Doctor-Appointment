import express from "express";
import colors from "colors";
import morgan from "morgan";
import 'dotenv/config';
//Rest Object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'));


app.get('/',(req,res)=>{
    res.status(200).send({
        message:"Server Running"
    })
})
const port=process.env.PORT || 8000;
app.listen( port , () =>{
    console.log(`App is running in ${process.env.DEV_MODE} on port : ${port}`.bgCyan.white);
})