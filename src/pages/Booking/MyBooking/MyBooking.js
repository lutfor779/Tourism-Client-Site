import React, { useEffect } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Shared/Banner/Banner';
import Booked from '../Booked/Booked';

const MyBooking = () => {
    const { booking, setBooking, places, setPlaces } = useAuth();

    useEffect(() => {
        fetch('https://aqueous-badlands-20033.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [setBooking]);

    useEffect(() => {
        fetch(`https://aqueous-badlands-20033.herokuapp.com/places`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [setPlaces]);


    if (booking.length === 0) {

        return (
            <div>
                <Banner></Banner>
                <h1 className="my-5 text-warning">Please book first</h1>
                <Link to="/places"><Button variant="outline-primary px-5">Book</Button></Link>

            </div>
        )
    }

    return (
        <div>
            <Banner></Banner>
            <h1>My Booking</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        booking.map(book => <Booked key={book._id} book={book} places={places} booking={booking} setBooking={setBooking} />)
                    }
                </Row>
                <Link to="/places"><Button variant="outline-warning px-5 mt-5">Want to Book</Button></Link>
            </Container>
        </div>
    );
};

export default MyBooking;