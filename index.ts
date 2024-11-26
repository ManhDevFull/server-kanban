import express from 'express'
import dotenv from 'dotenv'
import userRouter from "./src/routers/user"
import storageRouter from "./src/routers/storage"
import cors from 'cors'
import mongoose from 'mongoose'
import { veryfyToken } from './src/middlewares/veryfyToken'
dotenv.config()

const app = express()
const LINK_MONGODB='mongodb+srv://thanhmanhdangfa:asdfghjkl@cluster0.jzotb.mongodb.net/kanban?retryWrites=true&w=majority&appName=Cluster0'
app.use(express.json())
app.use(cors())
app.use('/auth', userRouter)

app.use(veryfyToken)
app.use('/storage', storageRouter)




const connectDB = async () => {
    try {
        await mongoose.connect(LINK_MONGODB);
        console.log('Connect to db successfully!!!');
    } catch (error: any) {
        console.error(`Can not connect to db: ${error.message}`);
        process.exit(1);
    }
};

connectDB()
    .then(() => {
        app.listen(process.env.PORT, (err?: any) => {
            if (err) {
                throw new Error(err);
            }
            console.log(`Server is starting at http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.error(`Error in connecting to the database: ${error.message}`);
    });
