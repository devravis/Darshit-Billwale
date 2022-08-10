import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className='bg-header'>
        <Container fluid>
          <Navbar.Brand href="#home"><img src="img/billwale.png" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#work">How We Work</Nav.Link>
              <Nav.Link href="#feature">Feature</Nav.Link>
              <Nav.Link href="#testmonial">Testimonial</Nav.Link>
              <Nav.Link href="#price">Price</Nav.Link>
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar className='bg-header'>
        <Container fluid>
          <Navbar.Brand href="#home"><img src="img/billwale.png" alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Featurre</Nav.Link>
            <Nav.Link href="#pricing">Testimonial</Nav.Link>
            <Nav.Link href="#pricing">Price</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar> */}

    </>
  );
}

export default Header;