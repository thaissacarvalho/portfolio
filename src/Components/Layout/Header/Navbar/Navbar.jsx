import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../../Logo/Logo';
import { FiMenu } from 'react-icons/fi'

export default function NavBar() {

  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`}>
          <FiMenu className="navbar__menu-icon" />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md}`}>
              <Logo />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#project">Projetos</Nav.Link>
              <Nav.Link href="#skills">Habilidades</Nav.Link>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

