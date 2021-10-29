import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Place from '../Place/Place';

const Places = () => {
    const { places, setPlaces } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/places`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [setPlaces]);

    return (
        <div>
            <h1>This is places</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        places.map(place => <Place key={place._id} place={place} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Places;