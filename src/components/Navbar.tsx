import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


export default function GameNavbar() {

    return (

        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="/">That's Game</NavbarBrand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/games">GAMES</NavLink>
            <NavLink to="/games/:id">Games Info</NavLink>
          </Nav>
        </Container>
      </Navbar>
        
    );
}