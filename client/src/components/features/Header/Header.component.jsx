import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">Sportstar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/clothes">clothes</Nav.Link>
            <Nav.Link href="/shoes">shoes</Nav.Link>
            <Nav.Link href="/gear">gear</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link eventKey={2} href="/profile">
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};