import React, { useEffect, useRef, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PlaceOrder = () => {
    const { bookingId } = useParams();
    const [book, setBook] = useState({});

    const { _id, name, img, description } = book;
    const { user } = useAuth();

    const addressRef = useRef();
    const contactRef = useRef();

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/booking/${bookingId}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [bookingId]);

    // console.log();
    const handleBooking = (e) => {
        e.preventDefault();
        // const address = addressRef.current.value;
        // const contact = contactRef.current.value;

        // console.log("outer: ", _id, address, contact)
        const booking = { orderId: _id, email: user.email, status: "pending" };
        fetch('https://aqueous-badlands-20033.herokuapp.com/booking', {
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
                    e.target.reset();
                }
            })
    }




    return (
        <Container>
            <h1>Enjoy, {user.displayName}!!!</h1>
            <h3>{user.email}</h3>
            <Row className="mt-5">
                <Col xs={12} md={6}>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={img} height="250" className="rounded-top" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            {/* <Button variant="success px-5 mt-3" onClick={() => handleBooking(_id)}>Book</Button> */}
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <Row
                        className="justify-content-center mt-5 w-100 mx-auto">
                        <Col className="bg-success bg-opacity-25 p-4 rounded-3">
                            <Form onSubmit={handleBooking}>
                                <Form.Group className="mb-3" controlId="formPlaintextName">
                                    <Form.Control type="text" readOnly defaultValue={user.displayName} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPlaintextEmail">
                                    <Form.Control type="email" readOnly defaultValue={user.email} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPlaintextAddress">
                                    <Form.Control type="address" ref={addressRef} placeholder="Address" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPlaintextNumber">
                                    <Form.Control type="number" ref={contactRef} placeholder="Contact No:" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">Book Now</Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;