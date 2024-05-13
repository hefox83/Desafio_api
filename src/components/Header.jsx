import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNav() {
  return (
    <>
      <Navbar className='nabvar' bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Huachitos en Adopcion</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://huachitos.cl">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default BarraNav;