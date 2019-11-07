import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { RoomContext } from '../context/RoomContext';
import {Link} from "react-router-dom";
import defaultBcg from '../images/room-1.jpeg';

import StyledHero from '../components/StyledHero'
import './SingleRoom.css'

//import {useLocation} from "react-router-dom";
//let location = useLocation();


//import {useHistory} from "react-router-dom";
//  let history = useHistory();

//import {useParams} from "react-router-dom";
//let param = useParams();

export default function SingleRoom(props) {
  //From reat-router-dom
  //console.log(props)
  const [fromRoute]= React.useState({
    slug:props.match.params.slug,
    defaultBcg
  })
  const {getRoom} = React.useContext(RoomContext)
  
  const selectedRoom=getRoom(fromRoute.slug)
  
  if(!selectedRoom){
    return(
      <div className="error">
        <h3>No room found</h3>
        <Link to="/rooms" className="btn-primary">back to Rooms</Link>
      </div>
    )
  }
   
  const {name,description,capacity,size,price,extras,breakfast,pets,images} = selectedRoom;
  //firstImg=images[0]
  //This is trick for get value from images
  const [firstImg,...theRestImg]=images
  //console.log(name);
  return (
    <>
      <StyledHero img={firstImg||fromRoute.defaultBcg} >
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">back to Rooms</Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {theRestImg.map((image,index)=>
              <img key={index} src={image} alt={name}/>
          )}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
              <h3>info</h3>
              <h6>Price:${price}</h6>
              <h6>Size:${size}</h6>
              <h6>Max Capacity:{
                capacity>1 ? `${capacity} people` : `${capacity} person`
              }</h6>
              <h6>{pets?"pets allowed":"no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>    
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
              {extras.map((item,index)=>{
                return <li key={index}>- {item}</li>
              })}
        </ul>
      </section>
    </>
  )
}
