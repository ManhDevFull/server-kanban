import express from 'express'
import dotenv from 'dotenv'
import { error } from 'console'
import userRouter from "./src/routers/user"
dotenv.config()

const app = express()
app.use('/auth', userRouter)
const connectDB = async () => {
    try {
        console.log(`Connect to db successfully!!!`)
    } catch (error) {
        console.log(`Can not  connect to db ${error}`)
    }
}

connectDB().then(() => {
    app.listen(process.env.PORT, (err?: any) => {
        if (err) {
            throw new Error(err)
        }
        console.log(`Server is starting at http://localhost:${process.env.PORT}`)
    })
}).catch((error) => {
    console.log(error)
})
