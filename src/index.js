
import connectDB from './db/index.js';
import dotenv from 'dotenv'
import {app} from './app.js'
dotenv.config({
    path:'./.env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`server is running on PORT ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log(`mongodb  connection failed ${err} `)
})