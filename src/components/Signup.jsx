import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // initiolize the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  // bellow is a function tht wii handle the submit event
  const handlesubmit =async(e) =>{
     // below we prevent our site from reloading
    e.preventDefault()

    // update our loading hook with amessage that will be displayed to the users who are trying to register
    setLoading("please wait as registration is in work...")
    

    try{
      // create a  form data object that will enable you to capture the four details entered on the form
      const formdata = new FormData();

      // insert the four details in terms of key- value pairs
      formdata.append("username", username)
      formdata.append("email", email)
      formdata.append("password", password)
      formdata.append("phone", phone)

      // by use of
      const response =await axios.post("http://jermaine234.alwaysdata.net/api/signup", formdata)

      // set back the loading to default
      setLoading("");

      // just incase everything goes on wee update
      setSuccess(response.data.message)

      // clear your hooks
      setUsername("")
      setEmail("")
      setPassword("")
      setPhone("")

    }
    catch(error){
      // set the loading book back to default
      setLoading("")

      // update the error hook given back from the response
      setError(error.message)
    }
  }


  return (
    <div className='row justify-content-center mt-4'>
      <div className="card col-md-6 shadow p-4">
        <h1 className='text-primary'>sign up</h1>

        <h4 className="classname text-primary">{loading}</h4>
        <h3 className="classname text-success">{success}</h3>
        <h4 className="classname text-danger">{error}</h4>

        <form onSubmit={handlesubmit}>
          <input type="text"
          placeholder='enter the user name'
          className='form-control' 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required/> <br />

          {/* {username} */}

          <input type="email"
          placeholder='enter your email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required /> <br />

          {/* {email} */}

          <input type="password"
          placeholder='enter your pass word'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required /> <br />

          {/* {password} */}

          <input type="number"
          placeholder='enter your mobile phone number'
          className='form-control' 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required/> <br />

          

          {/* {phone} */}

          <input type="submit" value="signup" className='btn btn-primary' /> <br /> <br />

          Already have an account? <Link to={'/signin'}>signin</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup

// research on Axios module in reactjs