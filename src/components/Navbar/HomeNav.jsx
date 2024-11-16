
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Vetri_logo from '../assets/images/vetri_logos2.png';
import on_nav from "../assets/images/on_nav.png";
import './HomeNav.css'; 

const HomeNav = () => {
  
  return (
    <Navbar expand="lg" bg="light" variant="light" className="w-100">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Vetri_logo} alt="Logo" width="170" height="80" />
          <img src={on_nav} alt="Logo" width="80" height="80" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="me-auto w-100 justify-content-center">
            <Form className="d-flex mx-3 search-form w-50">
              <FormControl
                type="search"
                placeholder="Search for courses"
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-primary" className="search-btn">Search</Button>
            </Form>

            <NavDropdown title="Courses" id="courses-dropdown" className="course-dropdown mx-3 drop">
              <NavDropdown title="Development" id="development-submenu" className='dropdowns'>
               <Link to= "/Coursedetail" > <NavDropdown.Item href="#java">Java Fullstack</NavDropdown.Item></Link>
                <NavDropdown.Item href="#python">Python Fullstack</NavDropdown.Item>
                <NavDropdown.Item href="#python">MObileApp Development</NavDropdown.Item>
                <NavDropdown.Item href="#python">Data Analytitics</NavDropdown.Item>
                <NavDropdown.Item href="#python">Data Science</NavDropdown.Item>
                <NavDropdown.Item href="#python">MobileApp Development</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Frontend" id="frontend-submenu" className='dropdowns'>
                <NavDropdown.Item href="#react">React</NavDropdown.Item>
                <NavDropdown.Item href="#html">HTML</NavDropdown.Item>
                <NavDropdown.Item href="#css">CSS</NavDropdown.Item>
                <NavDropdown.Item href="#js">JavaScript</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Designing" id="designing-submenu">
                <NavDropdown.Item href="#ui-ux">UI/UX Designing</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Programming" id="programming-submenu">
                <NavDropdown.Item href="#c">C</NavDropdown.Item>
                <NavDropdown.Item href="#cpp">C++</NavDropdown.Item>
                <NavDropdown.Item href="#python">Python</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#data-analytics">Data Analytics</NavDropdown.Item>
              <NavDropdown.Item href="#business">Business</NavDropdown.Item>
              <NavDropdown.Item href="#marketing">Marketing</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Resources" id="resources-dropdown" className="course-dropdown mx-3 drop">
              <NavDropdown.Item href="#tutorials">Tutorials</NavDropdown.Item>
              <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#webinars">Webinars</NavDropdown.Item>
              <NavDropdown.Item href="#documentation">Documentation</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button variant="outline-primary" className="animated-button mx-2">Profile</Button>
          <Link to="/LoginPage">
            <Button variant="outline-success" className="animated-button mx-2">Login</Button>
          </Link>
          <Link to="/SignupPage">
            <Button variant="outline-primary" className="animated-button mx-2">Sign Up</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomeNav;
