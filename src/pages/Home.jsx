import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import axios from 'axios'
import Pcard from '../components/Pcard'
export default function Home() {
    let [place,setPlace]=useState(null)
    let [isUser,setIsUser]=useState(false)
    let [isFav,setIsFav]=useState(false)
    

    useEffect(()=>{
     let userLog= JSON.parse(localStorage.getItem("userLog"));
     let myFav= localStorage.getItem(`myFav${userLog.username}`)
      if(userLog!=null)
      {
        setIsUser(true);
      }
      else{
        setIsUser(false);
      }
      if(myFav ==null )
      {
        localStorage.setItem(`myFav${userLog.username}`, "[]");
      }
    

    },[])

    useEffect(()=>{
          setTimeout(()=>{
            axios.get("http://localhost:4000/properties")
            .then( (response)=> {
                setPlace(response.data)
            }).catch( (error)=> {
                console.error(error);
            });
          },1000)          
    },[])

  return (
    <div>
        <Navbar isUser={isUser}/>
        <Slide/>
        <h1 className='text-capitalize fs-4 text-center mt-5 text-muted'>{isUser}Find best rated properties</h1>
        <p className='text-center text-muted'>Best poperties are available here for more details contact us.</p>
        <div className='d-flex  mt-4 container '>
            {place && <Pcard  place={place}/> }
        </div>
    </div>
  )
}
