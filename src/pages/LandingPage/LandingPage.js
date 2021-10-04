import React from 'react'
import { Link } from 'react-router-dom'
import { HeroBanner } from '../../components/HeroBanner';
import  About  from '../../components/About';
const LandingPage = () => {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <HeroBanner />
      <About />
    </div>
  )
}
export default LandingPage