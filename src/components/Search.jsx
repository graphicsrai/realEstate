import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Pcard from '../components/Pcard'

export default function Search() {
  let{searchKey} = useParams()
    let[items , setItems] = useState( null );
    let[pending , setPending] = useState( true );
    let[error , setError] = useState( null );


    useEffect(()=>{
        setTimeout(()=>{
          console.log("fetch starts");
            fetch("http://localhost:4000/properties")
            .then( (response)=>{  
                                  if(response.ok==true)
                                  {
                                    return response.json()
                                  }
                                  else
                                  {
                                    throw Error("data not found , please try for different keyword")
                                  }
            } )
            .then( (data)=>{setItems(data); setPending(false) })
            .catch( (err)=>{ setError(err.message); setPending(false)} )
        } , 1000)
      } , []);
  return (
    <>
        <Navbar/>
        <div className='container'>
        <h1> Search Result :</h1>
        {error && <h1>{error}</h1>}
        {pending && <h4 className='text-center'>loading...</h4> }
        {items &&  <Pcard place={items.filter((prop)=>{return (prop.type===searchKey) || (prop.price===searchKey) || (prop.area.includes(searchKey)) || (prop.address.includes(searchKey))  })}/>}
        </div>
    </>
  )
}
