let con=require("../model/dbconfig")

let get=(req,res)=>{
    let sql="select * from Employee3 "
    con.query(sql,(err,result)=>{
        if(err){
            res.send(err)
            console.log(err)
        }else{
           res.send(result.rows)
            console.log(result.rows);
        }
    })
}


let post=(req,res)=>{
        const {sno,task,status,due,complition}=req.body
    const sql = "INSERT INTO Employee3(sno,task,status,due,complition) VALUES($1, $2, $3, $4,$5)";
    con.query(sql,[sno,task,status,due,complition],(err,result)=>{
        if(err){
         
            res.json(err)
            console.log("data is a not posted")
        }
        else{
        
            res.json(result)
            console.log("data is posted")
        }
    })
}
let del=(req,res)=>{
const sno=req.params.sno;
const sql ="delete from Employee3 where sno=$1";
con.query(sql,[sno],(err,result)=>{
       if (err) {
        console.log("data is a not delete");
        res.send(err)
       
    } else {
        console.log("Data deleted successfully");
        res.json(result);
    } 
})
}


let put=(req,res)=>{
    const sno=req.params.sno;
    const {task,status,due,complition}=req.body
  const sql = "update Employee3 set task=$1,status=$2,due=$3 ,complition=$4 WHERE sno = $5";
con.query(sql, [task,status,due,complition,sno], (err, result) => {
    if (err) {
        console.log("data is a not puted");
        res.json(err)
       
    } else {
        console.log("Data puted successfully");
        res.json(result);
    } } )
}


// app.put("/put/:id", (req, res) => {
// const id = req.params.id; 
// const {name,email,salary}=req.body
// const sql = "update emp set name=$1,email=$2,salary=$3 WHERE id = $4";
// con.query(sql, [name,email,salary,id], (err, result) => {
//     if (err) {
//         console.log("data is a not puted");
//         res.json(err)
       
//     } else {
//         console.log("Data puted successfully");
//         res.json(result);
//     }
// });
// });
module.exports={get,post,del,put}