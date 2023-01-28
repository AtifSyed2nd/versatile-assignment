import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'





const List = () => {
  const [data, setData] = useState([])
  useEffect(()=>{
    axios.get('/course').then(result => setData(result.data))
  },[])
  return (
    <div className='container my-5'>
        
   {data.length? (<>{data.map((course) => <Link className='noDecoration' to={`product/${course._id}`}><div className="card mb-3" id='list'>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={course.image} className="img-fluid listImg rounded-start" alt="productImage"/>
      </div>
      <div className="col-md-8">
      <h1 className=" m-2 ms-4 ">{course.title}</h1>
        <div className="card-body row">
        <div className=" product col-lg-7 col-12">
              <div className=" m-2 row">
                
                <span className="my-3">
                   {course.description}
                </span>
                <span className=" mb-2">
                  {" "}
                  <i></i>{" "}
                </span>
                <span className=" text-success">
                  {course.author} <b className="category"> {course.category} </b>
                </span>
                {/* <span className="category" >
                  Category
                </span> */}
                <i className=" text-muted ">
                  Date : {course.created_at && (course.created_at.toString().slice(0,10))}.
                </i>
               
              </div>
            </div>
            <div className="srcLstDtl col-lg-5 col-6">
              <div className=" m-2 row">
                <div className="col-lg-12 col-6 my-2">
                  <span className="rating">
                    {" "}
                    <b className="bg-warning p-1 border rounded text-white">
                      {Math.floor(Math.random() * (20 + 80)) / 10} Star
                    </b>{" "}
                    <big>Rating</big>{" "}
                  </span>
                  <br />
                  <s className=" text-muted">{course.price*1.5} &#8377;</s>             
                </div>
                <div className="col-lg-12 col-6 my-2">
                 
                  <span>Book now</span> <br />
                  
                  <h5 className=" text-success">
                    {course.price} &#8377; 
                  </h5>
                </div>
  
                {/* <button
                  type="button"
                  className=" n-btn "
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Book and Pay
                </button> */}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div></Link>)}</>): (<div>loading</div>)}
  
  
  </div>
  )
}

export default List