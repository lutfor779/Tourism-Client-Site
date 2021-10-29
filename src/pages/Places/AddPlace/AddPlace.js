import React, { useRef } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';

const AddPlace = () => {
    const nameRef = useRef();
    const imgRef = useRef();
    const descriptionRef = useRef();


    const handleAddUser = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const description = descriptionRef.current.value;

        const newUser = { name, img, description };
        fetch('http://localhost:5000/places', {
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
        <Container>

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
                    label="Description">
                    <Form.Control as="textarea" ref={descriptionRef} placeholder="Description" required />
                </FloatingLabel>
                <Button variant="primary" type="submit" >Add</Button>
            </Form>
        </Container>
    );
};

export default AddPlace;