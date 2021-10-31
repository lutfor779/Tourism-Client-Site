import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Place = ({ place }) => {
    const { _id, name, img } = place;

    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={img} height="250" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{_id}</Card.Text>

                    <Link to={`/placeOrder/${_id}`}>
                        <Button variant="success px-5 mt-3" >Book</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;