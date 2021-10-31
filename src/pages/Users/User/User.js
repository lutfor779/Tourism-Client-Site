import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const User = (props) => {
    const { singleUser, users, admins, currentUser, setUsers } = props;
    const { _id, name, email } = singleUser;

    const confirmAdmin = admins.find(admin => admin.email === currentUser.email);


    const handleDelete = id => {
        const result = window.confirm('Want to remove this item?');

        if (result) {
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
    }

    return (
        <Col xs={12} >
            <Row className="bg-primary bg-opacity-10 gy-3 p-3 rounded-3 ">
                <Col xs={12} md={4}>{name}</Col>
                <Col xs={12} md={5}>{email}</Col>
                <Col xs={12} md={3}>
                    {
                        confirmAdmin ? <Button
                            variant="danger"
                            onClick={() => handleDelete(_id)}
                        >
                            Delete
                        </Button> : <Button
                            variant="danger"
                            disabled
                        >
                            Delete
                        </Button>
                    }
                </Col>
            </Row>
        </Col>
    );
};

export default User;