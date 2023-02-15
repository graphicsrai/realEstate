import axios from 'axios';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import "./pcard.css"
import { useState , useEffect } from 'react';

function KitchenSinkExample({place}) {

    const [myFavID, setmyFavID] = useState(null);

    useEffect(()=>{
        let userLog= JSON.parse(localStorage.getItem("userLog"));
        let myFav= JSON.parse(localStorage.getItem(`myFav${userLog.username}`));
        let myfavsid = myFav.map((fav)=>{return fav.id});
        setmyFavID(myfavsid);
       },[])



    let addFav =(id)=>{
        axios.get("http://localhost:4000/properties/"+id)
        .then((value)=>{
            let userLog= JSON.parse(localStorage.getItem("userLog"));
             let myFav= localStorage.getItem(`myFav${userLog.username}`)
            myFav=JSON.parse(myFav)
            myFav.push(value.data)
            localStorage.setItem(`myFav${userLog.username}`,JSON.stringify(myFav))
        })
    }

    let removeFav =(id)=>{
        let userLog= JSON.parse(localStorage.getItem("userLog"));
        let myFav= JSON.parse(localStorage.getItem(`myFav${userLog.username}`));
        let ind = myFav.findIndex((favs)=>{ return favs.id === id});
        myFav.splice(ind , 1);
        myFav = JSON.stringify(myFav);
        localStorage.setItem(`myFav${userLog.username}` , myFav);
        window.location.reload();
    }


  return (
   <div>
    {myFavID && <div className='d-flex flex-wrap '>
        {
            place.map((p)=>{return(
                <Card className='mx-2 my-2' style={{ width: '18rem' }}>
                    <Card.Img className="imgage" variant="top" src={p.img} />
                    <Card.Body>
                        <Card.Title>{p.name}</Card.Title>
                        <Card.Text>{p.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{p.address}</ListGroup.Item>
                        <ListGroup.Item>{p.area}</ListGroup.Item>
                        <ListGroup.Item>{p.price}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body className=" d-flex justify-content-around align-items-center">
                       {!myFavID.includes(p.id) && <button className="btn btn-outline-primary" onClick={()=>{addFav(p.id)}}>Add Favorite</button>}
                       {myFavID.includes(p.id) && <button className="btn btn-outline-primary" onClick={()=>{removeFav(p.id)}}>remove Favorite</button>}
                        <button className="btn btn-outline-primary ">Contact</button>
                    </Card.Body>
                    </Card>
            )})
        }
    </div>}
   </div>
  );
}

export default KitchenSinkExample;