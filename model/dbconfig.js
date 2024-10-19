const pg=require("pg")

let con= new pg.Client({
    user:'postgres',
    host:'localhost',
    password:'7697',
    database:'Company',
    port:5432,
})
con.connect((err)=>{
    if(err){
        console.log('pg is not connected')
    }
    else{
        console.log('pg is connected')
    }
})
module.exports=con