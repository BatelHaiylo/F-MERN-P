import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/" style={{color:'#cd2134'}}>
          <b style={{color:'#fff'}}>DATA</b>THAT
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey={2} href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/dashboard">Cashier</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signup">sign up</Nav.Link>
            <Nav.Link href="/signin">
            sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};