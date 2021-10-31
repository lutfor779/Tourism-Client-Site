import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import User from '../User/User';

const Users = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);


    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);


    return (
        <div>
            <Banner />
            <h1>user</h1>
            <br />
            <Container>
                <Row className="g-5">
                    {
                        users.map(data => <User key={data._id} singleUser={data} users={users} setUsers={setUsers} admins={admins} currentUser={user} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Users;