let express=require("express")
let app=express()
let cors=require("cors")
const { root }=require("./routes/employee")

app.use(cors())
app.use(express.json())



app.use("/",root)
let port=4500;
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})