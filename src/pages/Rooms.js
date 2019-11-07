import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import RoomsContainer from '../components/RoomsContainer';

export default function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our room" subtitle="">
          <Link className="btn-primary" to='/'>Return Home</Link>
        </Banner>      
      </Hero>
      <RoomsContainer/>
    </>
  )
}
