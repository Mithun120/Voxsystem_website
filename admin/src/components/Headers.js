import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from "react-router-dom"
import vs from "../assets/vs.png"
const Headers = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className=" text-light text-decoration-none">Vox System</NavLink>
          <Nav className="">
            <NavLink to="/" className="mt-3 mx-2 text-light text-decoration-none">Login</NavLink>
            <img src={vs} style={{width:50}} alt="" />
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers