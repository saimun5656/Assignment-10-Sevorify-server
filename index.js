const express =require('express');
const chefs=require('./data/chefs.json')
const app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send('server running')
})
app.get('/chefs',(req,res)=>{
    
    res.send(chefs)
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
