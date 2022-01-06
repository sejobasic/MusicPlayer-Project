import {Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import '../App.css';
import styled from 'styled-components'


const Styles = styled.div`
  .navbar {
    background-color: black;
    box-shadow: 0 6px 7px 0 white;
    opacity: 0.85;
  }

  .navbar-nav .nav-link {
    color: white;
    font-family: Tahoma, sans-serif;
    font-weight: normal; 
    padding-left: 20px; 
    padding-right: 30px; 
    justify: left; 

    &:hover {
      color: #B2368F;
    }
  }
`;


function NavBar() {
  return (   
 <Styles>       
    <Navbar fixed='top'>
      <Container>
        <Navbar.Brand href="#home">
          <img 
            src="Q.png"
            width="160"
            height="160"
            className="logo"
            alt=""
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Songs</Nav.Link>
          <Nav.Link href="#pricing">Playlists</Nav.Link>
        </Nav>
  
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ width: 370, height: 60 }}
          />
          <Button variant="success" style={{ width: 110, fontSize: 18, fontWeight: 'bold'}}>
            Search
          </Button>
        </Form>
      </Container>
    </Navbar>
  </Styles>
)
}

export default NavBar
