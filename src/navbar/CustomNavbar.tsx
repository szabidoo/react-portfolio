import 'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'
import '../App.css'

import { Nav, NavbarBrand } from "react-bootstrap"
import { Navbar } from "react-bootstrap"
import { Container } from "react-bootstrap"

function CustomNavbar(){

  return(
    <>

        <Navbar expand="xl" className="d-none d-xl-block">
          <Container className='border rounded-4'>
            <NavbarBrand>Portfolio</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
          <Nav.Link href="#home">Home <i className='bi bi-house'></i></Nav.Link>
          <Nav.Link href="#profile">Profile <i className='bi bi-person'></i></Nav.Link>
          <Nav.Link href="#admin">Admin <i className='bi bi-controller'></i></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Navbar expand="xl" className="d-block d-xl-none">
          <Container>
            <NavbarBrand>Portfolio</NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#todo">Todo list</Nav.Link>
          <Nav.Link href="#tictac">Tic-Tac-Toe</Nav.Link>
          <Nav.Link href="#wordle">Wordle</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    </>

  )




}

export default CustomNavbar