import React from 'react'
import Clients from '../components/clients'
import { NavLink } from 'react-router-dom'
import Vision from '../components/Vision'
import Agile from '../components/Agile'
import HomeCarousel from './Carousel'
import Images from './Images'
const Home = () => {
  return (
    <div>
      <Images/>
      <Clients/>
      <Vision/>
      <Agile/>
      <NavLink to="/project">View Our Projects</NavLink>
    </div>
  )
}

export default Home