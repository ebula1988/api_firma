import express from "express";
import morgan from "morgan";

//routes

import firmaRoutes from './routes/firma.routes'

//cors
const cors = require('cors')
const app=express();

// settings
app.set("port", 4000);



//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors())

//Routes

app.use("/api/firma",firmaRoutes);




export default app;
//module.exports = app;