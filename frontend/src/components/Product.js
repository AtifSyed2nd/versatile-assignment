import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([])
  const {id} = useParams()
  useEffect(()=>{
    axios.get(`/course/${id}`).then(res => {
     setData(res.data)
     console.log(data)
    })
  },[])
  return <>
  {data? (<div className="container">
    
    <nav aria-label="breadcrumb" >
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link to='/' className="noDecoration mt-3 text-dark">{` Home`}</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Products</li>
  </ol>
</nav>
    <div className="m-5 p-3" id="product">
      <div className="mb-3 row">
        <div className="col-lg-7 col12">
          <img
            className="img-fluid w-75"
            src={`/${data.image}`|| " "}
            alt=""
          />
          <div className=" product col-12">
            <div className=" m-2 row">
              <h1 className=" mt-2">{data.title}</h1>
              <span className="my-3">
                {data.description}
              </span>
              <span className=" mb-2">
                {" "}
                <i></i>{" "}
              </span>
              <span className=" text-success">
                {data.author} <b className="category"> {data.category} </b>
              </span>
              {/* <span className="category" >
                Category
              </span> */}
              <i className=" text-muted my-2 ">Date : {data.created_at && (data.created_at.toString().slice(0,10))} .</i>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="  col-lg-4 col-6">
          <div className=" m-3 shadow border p-0">
            <div className="col-12 my-2">
              <div className="img m-0 mb-2 p-0 w-100">
                <img
                  className="img-fluid "
                  src={`/${data.image}` || ""}
                  alt=""
                />
              </div>
            </div>
            <div className=" my-2 p-2">
              <span className="rating">
                {" "}
                <b className="bg-warning p-1 border rounded text-white">
                  {Math.floor(Math.random() * (20 + 80)) / 10} Star
                </b>{" "}
                <big>Rating</big>{" "}
              </span>
              <br />
              <s className=" ">{data.price*1.5} &#8377;</s> 
              <br />
              <span>Book now</span> <br />
              <h5 className=" text-success">{data.price} &#8377;</h5>
            <button
              type="button"
              className=" lbtn "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Book and Pay
            </button>
            </div>

          </div>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <form>
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjWTbuuD2W88jigYLfzWzqvZ9lGM5G7JwgQQ&usqp=CAU"
                      alt="img"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                        objectFit: "cover",
                        margin: "3px 10px",
                      }}
                    />
                    Payment
                  </h1>
                  <button
                    type="button"
                    className="btn-close "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5 className="card-title my-md-3 my-2">Amount &#8377;</h5>
                  <select
                    className="form-select form-control my-2"
                    aria-label="Default select example"
                    //   onChange={(e) => setPaymetMethod(e.target.value)}
                  >
                    <option defaultValue>Payment Method</option>
                    <option value="Card">Card</option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                  </select>
                  <select
                    className="form-select "
                    aria-label="Default select example"
                    //   onChange={(e) => setPaymentStatus(e.target.value)}
                  >
                    <option defaultValue>Open this select menu</option>
                    <option value="Successful">Successful</option>
                    <option value="Pendind">Pendind</option>
                    <option value="Failed">Failed</option>
                  </select>

                  <button
                    type="button"
                    //   onClick={handleBook}
                    className="btn btn-success mt-md-4 mt-3 mb-2 "
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="border border-2 m-2 p-3">
      <h3 className="mb-3">What will you get</h3>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, exercitationem?</li>
<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, harum.</li>
<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsa veritatis.</li>
<li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum.</li>
    </div>
  </div>): <div>loading</div>}
  </>
};

export default Product;
