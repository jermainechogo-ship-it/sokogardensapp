import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  // Define the two hooks for capturing/sroring the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [ loading, setLoading] = useState("");
  const [ success, setSuccess] = useState("");
  const [ error, setError] = useState("");
  // below we have the use navigate hook to redirect us to another page on such
  const navigate = useNavigate()

  // Below is the ffunction to handle the signin acction
  const handlesubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()
    // opdate the loading hook witha message
    setLoading("kindly rlax as your account is being vrified...")


    try{
      // create a form data object that will hold the email and the apassword
      const formdata = new FormData()

      formdata.append("email", email);
      formdata.append("password", password)

      // interact with axios for the response
      const response = await axios.post("https://jermaine234.alwaysdata.net/api/signin",formdata);

      // set the loading hook back to default
      setLoading("");

      // Check whether the user exiists as part of your response from the api
      if(response.data.user){
        // if user is there , then the datail entered during sign in are
        // setSuccess("Login athentication correct")
        // Store user details in local storage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // if it successful let the person bedirecrted to another page
        navigate("/")
      }
      else{
        // the credebtiols enntered are incorrect
        setError("login authentication failed")
      }

    }
    catch(error){
      // set loading basck to default
      setLoading("");

      // uppdate error
      setError("Sorry your credentiols are incorrect")

    }
  }
  return (
    <div className='row justify-content-center mt-4'>
        <div className="col-md-6 card shadow p-4">
          <h1 className="text-info">signin</h1>

          <h5 className='text-info'>{loading}</h5>
          <h3 className="text-success">{success}</h3>
          <h4 className="text-warning">{error}</h4>

          <form onSubmit={handlesubmit}>
            <input type="email"
           placeholder='kindly enter your email'
           className='form-control'
           required
           value={email}
           onChange={(e) => setEmail(e.target.value)} /> <br />

           {/* {email} */}
           


            <input type="password"
            placeholder='kindly insert your password'
            className='form-control'
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/> <br />

            {/* {password} */}

            <input type="submit" name="signin" id="" /> <br /> <br />

            Dont  have an account? <Link to={'/signup'}>register</Link>
          </form>
        </div>
    </div>
  )
}

export default Signin