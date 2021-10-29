import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [users]);


    return (
        <div>
            <h1>user</h1>
            <br />
            <Container>
                <Row className="g-4">
                    {
                        users.map(user => <User key={user._id} user={user} users={users} setUsers={setUsers} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Users;