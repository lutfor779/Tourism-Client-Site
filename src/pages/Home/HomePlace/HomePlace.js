import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./HomePlace.css";

const HomePlace = ({ place }) => {
    const { _id, name, img } = place;
    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={img} height="200" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Link to={`/placeOrder/${_id}`}><Button variant="info px-3 mt-3" size="sm">Book</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default HomePlace;