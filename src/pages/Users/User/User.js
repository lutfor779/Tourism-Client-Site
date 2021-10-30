import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const User = (user) => {
    const { users, setUsers } = user;
    const { _id, name, email } = user.user;

    const handleDelete = id => {
        const url = `https://aqueous-badlands-20033.herokuapp.com/users/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);

                    alert('deleted successfully');
                }
            });
    }

    return (
        <Col xs={12} >
            <Row className="bg-primary bg-opacity-10 gy-3 p-3 rounded-3 ">
                <Col xs={12} md={4}>{name}</Col>
                <Col xs={12} md={5}>{email}</Col>
                <Col xs={12} md={3}>
                    <Button
                        variant="danger"
                        onClick={() => handleDelete(_id)}
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Col>
    );
};

export default User;