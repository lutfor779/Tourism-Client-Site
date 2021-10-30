import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
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

            <div className="my-5 p-5 bg-primary bg-opacity-25 ">
                <Container>
                    <h1>What Customer Say</h1>
                    <br />
                    <h4>"Let's start your journey with us, your dream will come true. <br /> It's really enjoyable and you will gain a lot of good memory. <br /> You will enjoy and love the trip and you will never get boor.</h4>
                </Container>
            </div>

            <div className="my-5 p-5 ">
                <Container>
                    <img src="https://www.dontpayfull.com/blog/wp-content/uploads/2016/10/How-to-Travel-the-World-for-Free.gif" alt="travell" className="img-fluid" />
                </Container>
            </div>

            <div className="mt-5 p-5 bg-success bg-opacity-25 ">
                <Container>
                    <h1>Why choose us?</h1>
                    <br />
                    <h3>We provide best service for all. <br />
                        wE provide safe and reliable journey. <br />
                        We are very familiar to our customers. <br />
                        We have so many workers for provide you all kind of service. <br />
                        We provide 24/7 support.</h3>

                </Container>
            </div>


        </div>
    );
};

export default Home;