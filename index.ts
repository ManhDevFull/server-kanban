import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app =  express()

app.listen(process.env.PORT, (err?: any) => {
    if(err){
        throw new Error(err)
    }
    console.log(`Server is starting at http://localhost:${process.env.PORT}`)
});