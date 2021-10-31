import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';

const AddPlace = () => {
    const [admins, setAdmins] = useState([]);
    const { user } = useAuth();

    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/admin`)
            .then(res => res.json())
            .then(data => setAdmins(data));
    }, []);

    const confirmAdmin = admins.find(admin => admin.email === user.email);

    const handleAddUser = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = { name, img, description };
        fetch('https://aqueous-badlands-20033.herokuapp.com/places', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the place.');
                    e.target.reset();
                }
            })
    }




    return (
        <div>
            <Banner />

            <h1 className="text-danger mt-5 pb-3">Want to add any place?</h1>
            <Row sm={1} md={2} lg={3}
                className="justify-content-center mt-5 w-100 mx-auto">
                <Col className="bg-success bg-opacity-25 p-4 rounded-3">
                    <Form onSubmit={handleAddUser}>
                        <FloatingLabel controlId="floatingInput"
                            label="Place Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" ref={nameRef} placeholder="Place Name" required />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingInput"
                            label="Img Url"
                            className="mb-3"
                        >
                            <Form.Control type="text" ref={imgRef} placeholder="Img Url" required />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingTextarea"
                            className="mb-3"
                            label="Description"
                        >
                            <Form.Control as="textarea" type="url" ref={descriptionRef} placeholder="Description" required />
                        </FloatingLabel>
                        {
                            confirmAdmin ? <Button variant="primary" type="submit" >Add</Button> : <Button variant="primary" type="submit" disabled >Add</Button>
                        }
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default AddPlace;