import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className="mx-auto mt-5">
            <img src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="Not Found" className="img-fluid rounded-3" />
            <br />
            <Link to="/home"><Button variant="info px-3 my-5">Go to home</Button></Link>
        </Container>
    );
};

export default NotFound;