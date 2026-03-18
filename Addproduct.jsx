import React, { useState } from 'react'
import Loader from './Loader';
import axios from 'axios';


// introduce hooks


const Addproduct = () => {

const[product_name, setProductName] = useState("");
const[product_decsription, setProductDescription] = useState("");
const[product_cost, setProductCost] = useState("");
const[product_photo, setProductPhoto] = useState("");
// declare the additional hooks to manage the state of the application
const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] =useState("");

// create afunction that will handle the submit function
const handleSubmit = async (e) =>{
  // prevent the site from reloading
  e.preventDefault()
  // set loading hook with a message(activate it)
  setLoading(true)

  try{
    // create a form data
    const formdata = new FormData()

    // appen the etails 
    formdata.append("product_name", product_name);
    formdata.append("product_description", product_decsription);
    formdata.append("product_cost", product_cost);
    formdata.append("product_photo", product_photo);

    //  interact with axios to help you use the method post
    const response = await axios.post("https://jermaine234.alwaysdata.net/api/add_products", formdata)


    // set the loading hook back to default
    setLoading(false)

    // update the success hook with a message
    setSuccess(response.data.message)
    // clearing the hooks(setting them back to default)
    setProductName("");
    setProductDescription("");
    setProductCost("");
    setProductPhoto("");

    e.target.reset()


    setTimeout(() => {
        setSuccess("");
      }, 5000);
  }
  catch(error){
    // set loading back to default
    setLoading(false)

    // u
    setError(error.message)

  }
}

  return (
    <div className='row justify-content-center nt-4'>
      <div className="col-md-6 p-4 caed shadow">
        <h3>Welcom to addpoducts</h3>

        {/* {bind the loading hook} */}
        {loading && <Loader />}
        <h3 className="text-success">{success}</h3>
        <h4 className="text-warning">{error}</h4>

        <form onSubmit={handleSubmit}>
          <input type="text"
          placeholder='Enter the product name'
          className='form-control'
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)} /> <br /> 

          {/* {product_name} */}


          <input type="text"
          placeholder='product description'
          className='form-control'
          required 
          value={product_decsription}
          onChange={(e) => setProductDescription(e.target.value)}/> <br />

          {/* {product_decsription} */}

          <input type="number"
          placeholder='product price'
          className='form-control'
          required
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)} /> <br />

          {/* {product_cost}  */}

          <label >product photo</label>
          <input type="file"
          className='form-control'
          required
          accept='images/*'
          onChange={(e) => setProductPhoto(e.target.files[0])} /> <br />

          <input type="submit"
          value="add product"
          className='btn btn-outline-info' />
        </form>

      </div>
      
    </div>
  )
}

export default Addproduct