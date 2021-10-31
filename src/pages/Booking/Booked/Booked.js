import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';


const Booked = ({ book, places, booking, setBooking }) => {
    const { _id, orderId, email, status } = book;
    const { user } = useAuth();

    const [isApproved, setIsApproved] = useState(status);


    if (user.email !== email) {
        return false;
    }


    const result = places.length !== 0 && places.find(place => place._id === orderId);


    const handleUpdate = (id) => {
        const updateBooking = { status: "approved" };

        const url = `https://aqueous-badlands-20033.herokuapp.com/booking/${id}`;
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

    const handleDelete = id => {
        const result = window.confirm('Want to remove this item?');
        // console.log(result);

        if (result) {
            const url = `https://aqueous-badlands-20033.herokuapp.com/booking/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = booking.filter(book => book._id !== id);
                        setBooking(remaining);
                        alert('Deleted successfully');
                    }
                });
        }
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
                                    >Approve</Button></small> : <small><Button variant="outline-secondary"
                                        size="sm"
                                        disabled
                                    >Approved</Button></small>
                                }

                            </div>
                            <Card.Text >
                                <Button variant="danger px-4 mt-3"
                                    size="sm"
                                    onClick={() => handleDelete(_id)}
                                >Remove</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            }
        </div>
    );
};

export default Booked;