import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from './Loading';
import { RoomContext } from '../context/RoomContext';

export default function RoomsContainer() {
    const {rooms,sortedRooms,loading} = React.useContext(RoomContext)

    if(loading){
        return <Loading/>
    }
    return (
        <>
          Container
          <RoomsFilter rooms={rooms}/>
          <RoomsList rooms={sortedRooms}/>  
        </>
    )
}
