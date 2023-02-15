import axios from 'axios';
import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import './signup.css'

export default function Signup() {
  let username=useRef();
  let email=useRef();
  let password=useRef();

  let handleSubmit=(e)=>{
    e.preventDefault();
    let user=JSON.stringify({
      username:username.current.value,
      email:email.current.value,
      password:password.current.value
    })

    console.log(user);
    axios("http://localhost:4001/users",
                {method:"post",
                  headers:{'Content-Type': 'application/json'},
                data:user
                }
    ).then((e)=>{console.log(e);})

  }

  return (
    <>
      <Navbar/>
    <div className='w-50 signup mx-auto mt-5 p-4 rounded-2'>
    <h2 className="text-muted">SignUp</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username"  ref={username}/>
      </Form.Group>

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
  )
}
