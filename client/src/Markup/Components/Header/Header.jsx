import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from '@mui/material/Button';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import './header.css';

import { AuthContext } from "../../../Contexts/AuthContext";
const Header = () => {
  const { isLogged, isAdmin, setIsAdmin, setIsLogged, employee } =
  useContext(AuthContext);
  const navigator = useNavigate();


  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('employee');

    // Reset authentication state
    setIsLogged(false);
    setIsAdmin(false);
    navigator('/login')
  };

    useEffect(()=>
    { 
      if(!isLogged){
        navigator('/login');
      }
      else{
       console.log(isAdmin);
      }

    },[]);

    useEffect(()=>
    { 
      if(!isLogged){
        navigator('/login');
      }
      else{
       console.log(isAdmin);
      }

    },[navigator]);


  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
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
            </Nav>
            <Nav className="ml-auto">
              {isLogged && <Button variant="contained" color="error" onClick={handleLogout}>Logout</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;