const express=require('express');
const app=express();
const morgan=require('morgan');
const port=3000;
app.use(morgan('dev'));
app.get('/list',(req,res)=>{
    let result={
        id:1,
        name:'shivam',
        email:'shivam@gmail.com'
    };
    res.status(200).json(result);
});

app.get('/details',(req,res)=>{
    let result={
        id:1,
        name:'radha',
        email:'radha@gmail.com'
    };
    res.status(200).json(result);
});

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
});