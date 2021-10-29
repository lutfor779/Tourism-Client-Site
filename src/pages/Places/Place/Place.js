import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Place = ({ place }) => {
    const { _id, name, img, description } = place;
    const { user } = useAuth();

    const handleBooking = (id) => {
        const booking = { orderId: id, email: user.email, status: "pending" };
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booked');
                }
            })
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
                    <Button variant="success" onClick={() => handleBooking(_id)}>Book</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Place;