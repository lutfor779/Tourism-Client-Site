import React, { useEffect } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomePlace from '../HomePlace/HomePlace';


const Home = () => {
    const { places, setPlaces } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/places`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [setPlaces]);

    const somePlaces = places.slice(0, 6);


    return (
        <div>
            <HomeBanner />
            <div className="py-5">
                <h1 className="text-primary">Want to take a tour?</h1>
                <h5>Here are some places. <br />
                    You can choose them as your choice.</h5>
            </div>
            <div>
                <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">

                    {
                        somePlaces.map(place => <HomePlace key={place._id} place={place} />)
                    }

                </Row>

                <Link to="/places"><Button variant="outline-primary my-5 " >See More</Button></Link>
            </div>

        </div>
    );
};

export default Home;