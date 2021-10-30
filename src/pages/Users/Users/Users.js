import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../Shared/Banner/Banner';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    return (
        <div>
            <Banner />
            <h1>user</h1>
            <br />
            <Container>
                <Row className="g-5">
                    {
                        users.map(user => <User key={user._id} user={user} users={users} setUsers={setUsers} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Users;