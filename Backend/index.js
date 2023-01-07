const { default: axios } = require("axios")
const express=require("express")
const { connection, UserModal } = require("./db")
const app=express()
app.use(express.json())
var cors = require('cors')
app.use(cors())


app.post("/adduser",(req,res)=>{
    axios.get("https://randomuser.me/api/?results=50").then((re)=>{
        const data=re.data.results
         UserModal.insertMany(data)
         res.send({"msg":"Data Added in the Database Sucessfully"})
    })
})

app.get("/getuser",async(req,res)=>{
    const page = req.query.page||1;
    const gender=req?.query?.gender
    const resultsPerPage = 10;
    const skip = (page - 1) * resultsPerPage;
    const count= await UserModal.count()
    const totalPages = Math.ceil(count / resultsPerPage);
    if(!gender){
        const result= await UserModal.find().skip(skip).limit(resultsPerPage)
        res.send({data:result,totalPages:totalPages})
    }else{
        const count= await UserModal.count({gender:gender})
        const totalPages = Math.ceil(count / resultsPerPage);
        const result= await UserModal.find({gender:gender}).skip(skip).limit(resultsPerPage)
        res.send({data:result,totalPages:totalPages})
    }
    
})
app.delete("/deleteusers",async(req,res)=>{
    const result= await UserModal.deleteMany()
    res.send({"msg":"Data Deleteted in the Database Sucessfully"})
})
app.listen(8000,async()=>{
    try{
          await connection
          console.log("Connection sucess");
    }catch(err){
    console.log("Error in connection");
    console.log(err);
    }
   
})