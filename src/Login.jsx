// import React, { Component } from 'react';
import React, { useState } from 'react'; 
import axios from 'axios'
import {NavLink} from "react-router-dom";
import './App.css';

function Login () {
        
      const [name, setName] = useState()
      const [pass, setPass] = useState()

      const nameChange = (newName) => {
        setName(newName)
      }


      function onSubmitFunc(e) {
        console.log("this function is called");
        axios.post("http://localhost:4000/formdatasubmit", {"userName": name, "password": pass})
        e.preventDefault()
      }

    return (
      <>
      {/* <nav> */}
      <div className="App">
        <div style={{backgroundImage: `url("https://wallpaperaccess.com/full/1393189.jpg")`}}>
        {/* <div className="card cardalign w-50">  */}
          <div className="card-body">
          <img className="logo" src="data:image/png;base64,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"/>
                <h1 className="signintext">Urban Educate</h1>
                <form className="logininputs" onSubmit={onSubmitFunc}>
                <input type="email" className="emailinput" placeholder="Email" onChange={(e)=>setName(e.target.value)} />
                <input type="password" className="passwordinput" placeholder="Password" onChange={(e)=>setPass(e.target.value)} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <button className="btn btn-primary btn-md m-2">Sign UP</button>
                {/* <NavLink className="navbar-brand" to="/">
                                    Sign Up
                                    </NavLink> */}
                                  

            </form>
            </div>
          </div>
         </div>
         {/* </nav> */}
      </>
    );
  }

export default Login;