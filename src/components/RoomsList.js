import React from 'react'
import Room from './Room'
import './RoomsList.css'

export default function RoomsList({rooms}) {
    if(rooms.length===0){
        return(
            <div className="empty-search">
                <h3>Sorry, no room match</h3>
            </div>
        )
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {
                    rooms.map(item=>{
                        return <Room key={item.id} room={item}/> 
                    })
                }
            </div>
        </section>
    )
}
