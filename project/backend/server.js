import express from 'express'
import cors from 'cors'
import os, { platform } from 'os'
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5001;
app.get('/', (req, res) => {
  
  res.send({
    status: "200",
    message: "Welcome to the API world"
  })
})
app.get('/api/contact', (req,res) =>{
    const {name, email,message} = req.body;
    if(!name || !email || !message){
        return res.status(400).send({
            status: "400",
            message: "All fields are required"
        })
    }
    res.send({
        status: "200",
        message: "Data received successfully",
        data: {
            name,
            email,
            message
        }
    })
})
app.get('/api/system',(req,res)=>{
    try{
        const data = {
            platform : os.platform(),
            cpu : os.cpus(),
            Arch : os.arch(),
            freeMemory : os.freemem(),
            totalMemory : os.totalmem(),
        }
        res.send({
            status: "200",
            message: "System information retrieved successfully",
            data: data
        })
    }
    catch(error){
        res.status(500).send({
            status: "500",
            message: "Error retrieving system information",
            error: error.message
        })
    }
})
app.post('/api/senddata',(req,res)=>{
    const {data} = req.body;
    if(!data){
        return res.status(400).send({
            status: "400",
            message: "Data field is required"
        })
    }
    res.send({
        status: "200",
        message: "Data received successfully",
        data: data
    })
})
app.get('/api/viewdata',(req,res)=>{
    req.query.data ? res.send({
        status: "200",
        message: "Data retrieved successfully",
        data: req.query.data
    }) : res.status(400).send({
        status: "400",
        message: "Data query parameter is required"
    })
})

app.listen(PORT ,()=>{
    console.log("Server listening at port :" , PORT)
})