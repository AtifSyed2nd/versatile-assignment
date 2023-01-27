import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = ({setImage}) => {
  const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
        title: '',
        image: '',
        description: '',
        author: '',
        price: '',
        category: ''
    })

    const handleChange = (e) => {
        const {value, name} = e.target;
        setInputValues((prevVal)=>({
            ...prevVal,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("log",inputValues)
        setImage(inputValues.image)
        axios.post('/course',inputValues).then(res => navigate('/')).catch(err => console.log(err))
    }



  return (
    <div><div className='m-5' id="add">
    <form className="row g-3 border border-2 rounded p-3 m-5" >
      <h3>Add Product</h3>
    <div className="col-md-6">
      <label htmlFor="inputTitle" className="form-label">Title</label>
      <input type="text" className="form-control" name='title' value={inputValues.title} onChange={handleChange} id="inputTitle" placeholder="Product Name or Title" />
    </div>
    <div className="col-md-6">
      <label htmlFor="image" className="form-label">Image</label>
      <input type="file" className="form-control" id="image" name='image' value={inputValues.image} onChange={handleChange} />
    </div>
    <div className="col-12">
      
      <label htmlFor="discription" className="form-label">Discption</label>
    <textarea className="form-control"  id="discription" name='description' value={inputValues.description} onChange={handleChange} placeholder="Discription" rows="3"></textarea>
    </div>
    <div className="col-md-4">
      <label htmlFor="author" className="form-label">Auther</label>
      <input type="text" className="form-control" id="author" name='author' value={inputValues.author} onChange={handleChange} placeholder="Auther Name" />
    </div>
    <div className="col-md-4">
      <label htmlFor="price" className="form-label">Price</label>
      <input type="number" className="form-control" id="price" name='price' value={inputValues.price} onChange={handleChange} />
    </div>
    <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">Category</label>
      <select id="inputState" className="form-select" name='category' value={inputValues.category} onChange={handleChange}>
        <option value='all'>-Category-</option>
        <option value="New">New</option>
        <option value="Top">Top</option>
        <option value="Best">Best</option>
      </select>
    </div>
    
    <div className="col-12">
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit in</button>
    </div>
  </form>
    </div></div>
  )
}

export default AddProduct