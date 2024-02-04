import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css"
import img1 from "./images/img1.png"


const Register = () => {



    const [Name,setName]=useState("")
    const [Password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    
    function Name1(e) {
      setName(e.target.value)
    }
    function Password1(e) {
      setPassword(e.target.value)
    }
    function confirmPassword1(e) {
      setConfirmPassword(e.target.value)
    }


    const Navigate=useNavigate()

    function handler (e) {

      e.preventDefault();
    


     
      var name=document.myform.name.value;  
      var firstpassword=document.myform.password1.value;  
      var secondpassword=document.myform.password2.value;  
        
      if (name === ""){  
        alert("Name can't be blank");  
        return false;  
      }
      else if (firstpassword.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
      } else if (!/[A-Z]/.test(firstpassword)) {
        alert("Password must contain at least one uppercase letter.");
        return false;
      } else if (!/[a-z]/.test(firstpassword)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
      } else if (!/\d/.test(firstpassword)) {
        alert("Password must contain at least one number.");
        return false;
      } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(firstpassword)) {
        alert("Password must contain at least one special character.");
        return false;
      } else if (firstpassword !== secondpassword) {
        alert("Passwords must be the same!");
        return false;
      }

       
      axios.post('https://65bc43fd52189914b5bdb60e.mockapi.io/register',
      {
        Name:Name,
        Password:Password,
        confirmPassword:confirmPassword
      })
      setName("")
      setPassword("")
      setConfirmPassword("")
      Navigate("/")
      

    }



    useEffect(() => {

      window.scrollTo(0,0);
      
    },[]);


    return (


        <div>





<section className="vh-100">

  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="card col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4" name="myform" onSubmit={handler}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    {/* <i className="fas fa-user fa-lg me-3 fa-fw"></i> */}
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="fname" className="form-control" name="name" onChange={Name1} value={Name} />
                      <label className="form-label fw-bold" for="fname">Your Name</label>
                    </div>
                  </div>

                 

                  <div className="d-flex flex-row align-items-center mb-4">
                    {/* <i className="fas fa-lock fa-lg me-3 fa-fw"></i> */}
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name="password1" onChange={Password1} value={Password} />
                      <label className="form-label fw-bold" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    {/* <i className="fas fa-key fa-lg me-3 fa-fw"></i> */}
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" name="password2" onChange={confirmPassword1} value={confirmPassword} />
                      <label className="form-label fw-bold" for="form3Example4cd">Confirm Your Password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <label className="form-check-label" for="form2Example3">
                     Already have an account ? <Link to="/"><a href="">Sign in</a></Link>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg" >Register Now</button>
                  </div>

                 
                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src={img1}
                  className="img-fluid" alt="Sample image"></img>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>











        </div>



    )
};


export default Register;