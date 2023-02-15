import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import axios from "axios";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
    let email=useRef();
    let password=useRef();
  let[error , setError] = useState( null );
  let navi=useNavigate()

  let handleLogin = (e)=>{
        e.preventDefault();

        fetch(" http://localhost:4001/users")
        .then(res => res.json())
        .then((data)=>{
           let userDetails = data.find( (user)=>{ return user.email === email.current.value } )
           if(userDetails!=null)
           {
            let userPassword = data.find( (user)=>{ return user.password === password.current.value } )
            if(userPassword!=null)
            {
                console.log(userDetails);
                let userLog = (userDetails)
                localStorage.setItem("userLog", JSON.stringify(userLog));
                navi("/")
            }
            else{
                alert("Password doesn't match")
            }

           }
           else{
            throw Error("User not found , please check your credentials")
           }
         }).catch((err)=>{
            setError(err.message)
            alert(err.message)
         })
       
    }

  return (
    <>
      <Navbar/>
    <div className='w-50 signup mx-auto mt-5 p-4 rounded-2'>
    <h2 className="text-muted">Login</h2>
    <Form onSubmit={handleLogin}>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
 

    </div>
    </>
  );
}

export default Login;
