import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Place = ({place}) => {
    const { _id, name, img, description } = place;
    
    const handleBooking = (id) => {
        console.log('clicked: ', id);
    }

    return (
        <Col>
            <Card className="h-100 rounded">
                <Card.Img variant="top" src={img} height="250" className="rounded-top" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="success" onClick={()=>handleBooking(_id)}>Book</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Place;