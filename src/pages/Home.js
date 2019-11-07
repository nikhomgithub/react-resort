import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'
import FeatureRoom from '../components/FeatureRoom';
import Button1 from '../components/StyledHero';


export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="luxurious rooms" subtitle="Start at $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services/>
      <FeatureRoom/>
    </>
  )
}
