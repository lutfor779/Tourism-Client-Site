import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import lr from '../../../../images/lr.jpg'

const NavBar = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img
                            src={lr}
                            alt="lr travell"
                            width="30"
                            height="30"
                            className="d-inline-block align-top rounded-3"
                        />{' '}
                        LR Travel Agency</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/places">Places</Nav.Link>
                            <Nav.Link as={HashLink} to="/users">Users</Nav.Link>
                            <Nav.Link as={HashLink} to="/booking">Booking</Nav.Link>
                            <Nav.Link as={HashLink} to="/addPlace">Add Place</Nav.Link>
                        </Nav>


                        <Nav>
                            {
                                user.email ? <div>
                                    {
                                        user.displayName && <Navbar.Text>
                                            Signed in as: {user.displayName}
                                        </Navbar.Text>
                                    }
                                    {
                                        user.photoURL && <img src={user.photoURL} alt="profile"
                                            width="30"
                                            height="30"
                                            className="d-inline-block align-middle rounded-3 mx-3" />
                                    }
                                    <Button variant="outline-warning" onClick={logOut}>
                                        Logout
                                    </Button>
                                </div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;