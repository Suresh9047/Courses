import { Link } from 'react-router-dom';
import Vetri_logo from '../assets/images/VTS Logo_page-0001.jpg';
import './HomeNav.css';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const HomeNav = () => {
  return (
    <Navbar expand="lg" className="custom-navbar w-100">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Vetri_logo} alt="Logo" width="200" height="120" />
        </Navbar.Brand>
        <Nav className="ms-auto mx-auto ">
          <NavDropdown title="Courses" id="course-dropdown" style={{color:"black",fontSize:"22px"}}>
            <Link to="/Coursedetail">
              <NavDropdown.Item href="#java">Java Fullstack</NavDropdown.Item>
            </Link>
            <Link to="/Coursedetail">
              <NavDropdown.Item href="#python">Python Fullstack</NavDropdown.Item>
            </Link>
            <Link to="/Coursedetail">
              <NavDropdown.Item href="#mobileapp">MobileApp Development</NavDropdown.Item>
            </Link>
            <Link to="/Coursedetail">
              <NavDropdown.Item href="#data-analytics">Data Analytics</NavDropdown.Item>
            </Link>
            <Link to="/Coursedetail">
              <NavDropdown.Item href="#data-science">Data Science</NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
