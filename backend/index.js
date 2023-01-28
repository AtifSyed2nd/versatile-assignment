const express = require('express');
const connectDB = require('./db/connectDB');
const Course = require('./model/courses')
require('dotenv').config();
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const fileName = path.basename(file.originalname, path.extname(file.originalname)) + Date.now().toString() + path.extname(file.originalname)
        cb(null, fileName)
    }
  })
  
const upload = multer({ storage: storage })

const port = process.env.PORT || 8000

const app = express();

// app.use(express.static())
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/uploads' ,express.static('./uploads'))

app.post('/course', upload.single('image') ,async(req,res)=>{
    console.log(req.file.path, "filePath");
    const {
        title,
        description,
        author,
        price,
        category
      } = (req.body)
      const image = req.file.path
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
