const express = require('express');
const connectDB = require('./db/connectDB');
const Course = require('./model/courses')
require('dotenv').config();
const fs = require('fs');

const port = process.env.PORT || 8000

const app = express();

// app.use(express.static())
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/course',async(req,res)=>{
    const {
        title,
        image,
        description,
        author,
        price,
        category
      } = (req.body)
      console.log(image);
    const course = new Course({
            title,
            image,
            description,
            author,
            price,
            category
          });
     
      await course.save();
    //const data = logic on data
    return res.json(course)
})

app.get('/course',async (req,res)=>{
    const courses = await Course.find()
    res.json(courses)
})

app.get('/course/:id',async(req,res)=>{
    const getOne = await Course.findById({_id: req.params.id})
    res.json(getOne)
})

//const data = await axios.post('localhost:8000/api/course') <=== comming from frontend to backend

connectDB(process.env.MONGO_URI).then(()=>{
    app.listen(port,()=>{
        console.log(`server is running at port ${port}`);
    })
}).catch((err)=>{
    console.log(err);
})
