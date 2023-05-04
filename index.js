const express =require('express');
const cors =require('cors')
const chefs=require('./data/chefs.json')
const categories=require('./data/categories.json')
const recipes=require('./data/recipes.json')
const app=express();
const port=5000;
app.use(cors());
app.get('/',(req,res)=>{
    res.send('server running')
})
app.get('/chefs',(req,res)=>{
    res.send(chefs)
})
app.get('/chef/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    const selectedChef=chefs.find(cf=>parseInt(cf.id)===id);
    res.send(selectedChef)
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})
app.get('/recipes',(req,res)=>{
    res.send(recipes)
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})
