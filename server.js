const express=require('express');
const app=express();
const path = require('path');
const port=process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// test endpoint
app.get('/hello',(req,res)=>{
    res.send('Hello Jenkins!!!!');
});

// /login endpoint - description in README.md
app.post('/login',(req,res)=>{
    const {user, passwd}= req.body;
    if(user === passwd)
        res.send({
            status: "success",
            message: "Login successful"
        });
    else
        res.send({
            status: "failed",
            message: "Login failed"
        });
})

// start server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
