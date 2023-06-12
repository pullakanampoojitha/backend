const express=require("express")
const app=express()
const products=require("./products")
const mongoose=require("mongoose")
const cors=require("cors")
const bodyParser=require("body-parser")
const Content=require("./schema")

console.log(Content)
app.use(bodyParser.urlencoded({
    extends:true
}))

app.use(bodyParser.json())


app.use(cors())

mongoose.connect("mongodb+srv://pullakanampoojitha:pullakanampoojitha@cluster0.jcqfr7c.mongodb.net/firstdb?retryWrites=true&w=majority")
          .then(()=>{
            console.log("mongodb connected successfully")
          })
          .catch((err)=>{
            console.log(err)
          })

app.get("/",(req,res)=>{
    res.send("server started successfully")
})

app.post("/add",(req,res)=>{
    console.log("data from frontend",req.body)
    const {name,passcode}=req.body
    const newData=new Content({
        name,passcode
    })
    newData.save()
    res.send("added")
})
app.get("/retrieve",(req,res)=>{
    Content.find()
          .then(found=>res.json(found))
})
app.get("/my-products",(req,res)=>{    //products display avadaniki node index.js so server start avuthadhi then take new tab and do localhost:4000/my-products
    res.json(products)
})
app.get("/name",(req,res)=>{
    res.send("codegnan IT Solutions")

})
app.listen(4000,()=>console.log("server is started")) //execute in command prompt by using "node index.js" and in new tab give localhost:4000 and if u give that localhost:4000/name u get the name
