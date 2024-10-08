import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';
import { useStateValue } from "../../../Contexts/stateprovider";
import { AuthContext } from "../../../Contexts/AuthContext";
import colorLogo from '../../../assets/logo/logo1.png'
const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const { isLogged, isAdmin, setIsAdmin, setIsLogged, employee,setEmployee } =
  useContext(AuthContext);
  const navigator = useNavigate();


  const handleLogout = () => {
    // Remove token from local storage
    setIsLogged(false);
    setIsAdmin(false);
    localStorage.removeItem('employee');

    // Reset authentication state
    
    navigator('/login')
    // Reloads the current page
location.reload();
  };

    useEffect(()=>
    { 
      if(!isLogged){
        navigator('/login');
      }

    },[]);

    useEffect(()=>
    { 
      if(!isLogged){
        navigator('/login');
      }
      // else{
      //  console.log(isAdmin);
      // }

    },[navigator]);


  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
          <Container>
          <Navbar.Brand href="#home">
            <img
              src={colorLogo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {isLogged && <Nav.Link as={Link} to="/">Home</Nav.Link>}
              {isLogged && <Nav.Link as={Link} to="/cart">Cart</Nav.Link>}
              {isLogged && <Nav.Link as={Link} to="/order">Orders</Nav.Link>}
              {isLogged && isAdmin && <Nav.Link as={Link} to="/admin/category">Category</Nav.Link>}
              {isLogged && isAdmin && <Nav.Link as={Link} to="/admin/waiters">Waiters</Nav.Link>}
              {isLogged && isAdmin && <Nav.Link as={Link} to="/admin/users">Employee</Nav.Link>}
              {isLogged && isAdmin && <Nav.Link as={Link} to="/admin/food">Food</Nav.Link>}
              {isLogged && isAdmin && <Nav.Link as={Link} to="/admin/orders">Orders-List</Nav.Link>}
              <span className="header__optionLineTwo header__basketCount" style={{ marginLeft: '10px', fontWeight: 'bold', color: 'green', fontSize: '18px', backgroundColor: 'white', padding: '5px', borderRadius: '50%' }}>
              {basket.length}
            </span>


            </Nav>
            <Nav className="ml-auto mr-3">
              {isLogged && <Button variant="contained" color="error"  onClick={handleLogout}>Logout</Button>}
            </Nav>
            <Nav className="ml-auto mr-5">
              
            </Nav>
          </Navbar.Collapse>
          
    
        </Container>
      </Navbar>
    </>
  );
};

export default Header;