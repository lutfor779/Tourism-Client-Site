import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import Place from '../Place/Place';

const Places = () => {
    const { places, setPlaces } = useAuth();

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/places`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [setPlaces]);


    return (
        <div>
            <Banner />
            <div className="pb-5">
                <h1 className="text-primary py-5">Explore some places</h1>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">

                        {
                            places.length !== 0 && places.map(place => <Place key={place._id} place={place} />)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Places;