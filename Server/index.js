import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js';
import userRoutes from './routes/users.js'

import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(bodyParser.json({limiy:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limiy:"30mb",extended:true}))
app.use(cors())
app.use('/posts',postRoutes);
app.use('/user',userRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true,useUnifiedTopology:true})
 .then(() =>  {
    app.listen(PORT,()=> console.log( `Server is listening to ${PORT}`)) 
 }).catch((err) => {
     console.log(err.message);
 });

