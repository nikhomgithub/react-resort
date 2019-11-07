import React from 'react';
import { RoomContext } from '../context/RoomContext';
import './FeatureRoom.css';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

export default function FeatureRoom() {
  const {rooms,sortedRooms,featuredRooms,loading} = React.useContext(RoomContext)

  //console.log(rooms)
    //{ rooms: Array(13), 
    //  featuredRooms: Array(4), 
    //  sortedRooms: Array(13), 
    //  loading: false }

  const roomComponent = featuredRooms.map(room=>{
    return <Room key={room.id} room={room}/>
  })

  return (
    <section className="featured-rooms">
      <Title title="featured-rooms"/>
      <div className="featured-rooms-center">
        {loading?<Loading/>:roomComponent}
      </div>
    </section>
  )
}
