import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import {RiHome2Line} from 'react-icons/ri'
const Navigation = () => {
  return (
    <Navbar className='Navbar ' collapseOnSelect expand="lg" bg="">
      <Container>
        <Navbar.Toggle  className="navItems" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='Home' href="/"><RiHome2Line/></Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;