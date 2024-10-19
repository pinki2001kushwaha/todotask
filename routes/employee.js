let express=require('express')

let {get, post, del, put}=require("../controller/employee")

let root=express.Router()
root.get("/add/get",get)
root.post("/add/post",post)
root.delete("/add/delete/:sno",del)
root.put('/add/put/:sno',put)

module.exports={root}