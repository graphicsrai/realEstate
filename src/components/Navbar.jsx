import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({isUser}) {
//  console.log(isUser);
 let[searchKey , setSearchKey] = useState("");
 let navi=useNavigate()


  let handleLogout = ()=>{
      // setUserDetails(null);
      localStorage.clear();
      navi("/login")
  }

  return (
    <div className=" container-fluid bg">
      <div className="row container bg bg-light m-auto py-3 align-items-center">
        <div className="col-4 logo">
          <i className="fa-solid fa-house-flag text-primary"></i>
          <span className="real text-primary fw-bolder">Real</span>
          <span className="estate text-dark  fw-bold">Estate</span>
        </div>
        <div className="col-4 ">
            <ul className="my-auto">
            
                <li className="d-inline me-3"><Link to="/">Home</Link></li>
                <li className="d-inline me-3"><Link to="">About</Link></li>
                <li className="d-inline me-3"><Link to="/favs">Favorites</Link></li>
            </ul>
        </div>
        <div className="col-4 d-flex justify-content-end">
            <div className="search mx-3">
                <input type="search"  value={searchKey} onChange={ (e)=>{setSearchKey(e.target.value);}} className="px-1" placeholder="Search" />
                <div className="icon">
                <Link to={`/search/${searchKey}`}><i class="fa-solid fa-magnifying-glass pe-2"></i></Link>
                </div>
            </div>
            <div className="log ">
                {
                  isUser ?  (<button onClick={handleLogout} className="btn btn-primary">Logout</button>):(<Link to={"/login"}><button className="btn btn-outline-primary ms-3">Login</button></Link>)
                }
                {
                  isUser ?"" :<Link to={"/signup"}><button className="btn btn-outline-primary ms-3">SignUp</button></Link> 
                }
                
            </div>
        </div>
      </div>
    </div>
  );
}
