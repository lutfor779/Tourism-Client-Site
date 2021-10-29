import React from 'react';
import { Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';



const Booked = ({ book, places }) => {
    const { orderId, email, status } = book;
    const { user } = useAuth();

    const result = places.find(place => place._id === orderId);
    // console.log(result);

    return (
        <div>
            {
                user.email === email && <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={result.img} height="150" className="rounded-top" />
                        <Card.Body>
                            <Card.Title>{result.name}</Card.Title>
                            <Card.Text>{email}</Card.Text>
                            <div className="d-flex justify-content-evenly mt-3">
                                <Card.Text>Status: {status}</Card.Text>
                                <Card.Text className="text-primary">Approved</Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Booked;