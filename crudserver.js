import express from 'express';
import cors from 'cors';
const app = express();
const PORT = 5001;
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello World");
});
app.get('/users',(req,res)=>{
    const users=[{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Doe"}];
    res.send(users);
})
app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const users=[{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Doe"}];
    const user = users.find(u=>u.id===id);
    if(user){
        res.send(user);
    }else{
        res.status(404).send({message:"User not found"});
    }
})
app.post('/createUser',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.status(400).send({message:"Name is required"});
    }
    const newUser = {id:Math.floor(Math.random()*1000),name};
    res.send({message:"User created successfully",user:newUser});
})
app.put('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const {name} = req.body;
    if(!name){
        return res.status(400).send({message:"Name is required"});
    }
    const users=[{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Doe"}];
    const userIndex = users.findIndex(u=>u.id===id);
    if(userIndex!==-1){
        users[userIndex].name = name;
        res.send({message:"User updated successfully",user:users[userIndex]});
    }else{
        res.status(404).send({message:"User not found"});
    }
})
app.delete('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const users=[{id:1,name:"John"},{id:2,name:"Jane"},{id:3,name:"Doe"}];
    const userIndex = users.findIndex(u=>u.id===id);
    if(userIndex!==-1){
        const deletedUser = users.splice(userIndex,1);
        res.send({message:"User deleted successfully",user:deletedUser[0]});
    }else{
        res.status(404).send({message:"User not found"});
    }
})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}) 