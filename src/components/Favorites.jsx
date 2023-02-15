import Navbar from "./Navbar";
import { useState , useEffect } from "react";
import Pcard from '../components/Pcard'


const Favorites = () => {
    const [myfavs, setmyfavs] = useState(null);


    useEffect(() => {
     let userLog= JSON.parse(localStorage.getItem("userLog"));
     let favs= localStorage.getItem(`myFav${userLog.username}`)
     favs = JSON.parse(favs);
     setmyfavs(favs);
     console.log(favs);
    }, []);




    return ( 
        <div>
            <Navbar/>
            <h1>favs</h1>
            <hr/>       
            {myfavs && <Pcard  place={myfavs}/> } 
            


            </div>
     );
}
 
export default Favorites;