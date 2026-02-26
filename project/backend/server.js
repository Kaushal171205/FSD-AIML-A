// // import express from 'express'
// // import cors from 'cors'
// // import os, { platform } from 'os'
// // const app = express()
// // app.use(cors())
// // app.use(express.json())

// // const PORT = process.env.PORT || 5001;
// // app.get('/', (req, res) => {
  
// //   res.send({
// //     status: "200",
// //     message: "Welcome to the API world"
// //   })
// // })
// // app.get('/api/contact', (req,res) =>{
// //     const {name, email,message} = req.body;
// //     if(!name || !email || !message){
// //         return res.status(400).send({
// //             status: "400",
// //             message: "All fields are required"
// //         })
// //     }
// //     res.send({
// //         status: "200",
// //         message: "Data received successfully",
// //         data: {
// //             name,
// //             email,
// //             message
// //         }
// //     })
// // })
// // app.get('/api/system',(req,res)=>{
// //     try{
// //         const data = {
// //             platform : os.platform(),
// //             cpu : os.cpus(),
// //             Arch : os.arch(),
// //             freeMemory : os.freemem(),
// //             totalMemory : os.totalmem(),
// //         }
// //         res.send({
// //             status: "200",
// //             message: "System information retrieved successfully",
// //             data: data
// //         })
// //     }
// //     catch(error){
// //         res.status(500).send({
// //             status: "500",
// //             message: "Error retrieving system information",
// //             error: error.message
// //         })
// //     }
// // })
// // app.post('/api/senddata',(req,res)=>{
// //     const {data} = req.body;
// //     if(!data){
// //         return res.status(400).send({
// //             status: "400",
// //             message: "Data field is required"
// //         })
// //     }
// //     res.send({
// //         status: "200",
// //         message: "Data received successfully",
// //         data: data
// //     })
// // })
// // app.get('/api/viewdata',(req,res)=>{
// //     req.query.data ? res.send({
// //         status: "200",
// //         message: "Data retrieved successfully",
// //         data: req.query.data
// //     }) : res.status(400).send({
// //         status: "400",
// //         message: "Data query parameter is required"
// //     })
// // })

// // app.listen(PORT ,()=>{
// //     console.log("Server listening at port :" , PORT)
// // })
// import http from 'http';
// const PORT = 5001;

// const users = [
//     {id: 1 ,name :" Kaushal"},
//     {id: 2 ,name : "Ishan"}
// ]
// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const method = req.method;
//     if(url == "/users" && method == "GET"){
//         res.statusCode=200;
//         res.end(JSON.stringify(users));
//     }
//     else if(url.startsWith("/users/") && method == "GET"){
//         const id = parseInt(url.split("/")[2]);
//         const user = users.find(u=>u.id == id);
//         if(!user){
//             res.statusCode = 400;
//             console.log(`User ID ${id} Not found`);
//             return res.end(`User ID ${id} Not found`);
//         }
//         res.statusCode=200;
//         console.log(`User ID ${id} found`)
//         res.end(JSON.stringify(user));
//     }
//     else if(url == '/createUser' && method == 'POST'){
//         let body = '';
//         req.on('data', chunk => {
//             body += chunk.toString();
//         });
//         req.on('end', () => {
//             try {
//                 const newUser = JSON.parse(body);
//                 newUser.id = users.length + 1;
//                 users.push(newUser);
//                 res.statusCode = 201;
//                 res.end(JSON.stringify(newUser));
//             } catch (error) {
//                 res.statusCode = 400;
//                 res.end('Invalid JSON');
//             }
//         });
//     }
//     else if(url.startsWith("/users/") && method == "DELETE"){
//         const id = parseInt(url.split("/")[2]);
//         const userIndex = users.findIndex(u=>u.id == id);
//         if(userIndex === -1){
//             res.statusCode = 400;
//             console.log(`User ID ${id} Not found`);
//             return res.end(`User ID ${id} Not found`);
//         }
//         users.splice(userIndex, 1);
//         res.statusCode = 200;
//         res.end(JSON.stringify({message: `User ID ${id} deleted`}));
//     }
//     else{
//         res.statusCode = 404;
//         res.end("Error Page")
//     }
// })
// server.listen(PORT,()=>{
//     console.log("Server running at port 5001.")
// })
import http from "http"
const port=5001;
const users=[];
async function saveData(user){
    try{
        await fs.writefile("users.json",JSON.stringify(users));
        console.log("Data saved successfully")      

    }
    catch(error){
        console.log("Error saving data",error)
}

}
async function readData(){
    try{
        const data=await fs.readFile("users.json","utf-8");
        return JSON.parse(data);
    }
    catch(error){
        console.log("Error reading data",error)
        return [];
    }
}
const server=http.createServer((req,res)=>{
const url=req.url;
const method=req.method;
if(url=="/users" && method=="GET"){
    res.statusCode=200;
    res.end(JSON.stringify(users))
}
else if(url.startsWith("/users/") && method=="GET"){
    const id=url.split("/")[2];
    const user=users.find(u=>u.id==id);
    if(!user){
        res.statusCode=400;
        console.log(`User id ${id} not Found`)
        return res.end(`User id ${id} not Found`)
    }
    res.statusCode=200;
    console.log(`User id ${id} Found`)
    res.end(JSON.stringify(user))
}
else if(url=="/createuser" && method=="POST"){
    let body="";
    req.on("data",(chunk)=>{
      body=body+chunk;
    })
    req.on("end",()=>{
        const data=JSON.parse(body);
        if(data.name==null || data.email==null){
            res.statusCode=400;
            return res.end("Invalid data")
        }
        const newUser={
            id: Date.now(),
            name: data.name,
            email: data.email
        }
        users.push(newUser);
       res.statusCode=201;
       console.log(`user id ${newUser.id} created successfully`)
       res.end(`user id ${newUser.id} created successfully`)
    })
    
}
else if(url.startsWith("/users/") && method=="PUT"){
    const id=url.split("/")[2];
    const userIndex=users.findIndex(u=>u.id==id);
    if(userIndex==-1){
    res.statusCode=400;
    console.log(`user ${id} not found`)
    return res.end(`user id ${id} not found`)
    }
    let body="";
    req.on("data",(chunk)=>{
        body=body+chunk;
    })
    req.on("end",()=>{
        const data=JSON.parse(body);
        users[userIndex]={...users[userIndex],...data};
        console.log(`User id ${id} updated successfully`)
        res.end(`User id ${id} updated successfully`)
    })
    
}
else if(url.startsWith("/users/") && method=="DELETE"){
    const id=url.split("/")[2];
    const userIndex=users.findIndex(u=>u.id==id);
    if(userIndex==-1){
     res.statusCode=400;
     console.log(`user id ${id} not found`)
     return res.end(`user id ${id} not found`)
    }
    users.splice(userIndex,1)
    console.log(`user id ${id} deleted successfully found`)
    res.end(`user id ${id} deleted successfully found`)
}
else{
   res.statusCode=404;
    res.end("Error Page") 
}
})
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})