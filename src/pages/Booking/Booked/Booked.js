import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Booked = ({ book, places }) => {
    const { _id, orderId, email, status } = book;
    const { user } = useAuth();

    const [isApproved, setIsApproved] = useState(status);

    const result = places.length !== 0 && places.find(place => place._id === orderId);



    const handleUpdate = (id) => {
        const updateBooking = { status: "approved" };

        const url = `http://localhost:5000/booking/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateBooking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsApproved('approved');
                    alert('Approve Success');
                }
            })
    }


    return (
        <div>
            {
                result && user.email === email && <Col>
                    <Card className="h-100 rounded">
                        <Card.Img variant="top" src={result.img} height="150" className="rounded-top" />
                        <Card.Body>
                            <Card.Title>{result.name}</Card.Title>
                            <Card.Text>{email}</Card.Text>
                            <div className="d-flex justify-content-evenly mt-3">
                                <Card.Text>
                                    Status: {
                                        isApproved === "pending" ? <span className="text-danger">{isApproved}</span> : <span className="text-primary">{isApproved}</span>
                                    }
                                </Card.Text>

                                {
                                    isApproved === "pending" ? <small><Button variant="outline-success"
                                        size="sm"
                                        onClick={() => handleUpdate(_id)}
                                    >Approve</Button></small> : <small><Button variant="outline-success"
                                        size="sm"
                                        disabled
                                    >Approve</Button></small>
                                }

                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Booked;