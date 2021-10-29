import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Booked from '../Booked/Booked';

const Booking = () => {
    const { booking, setBooking, places, setPlaces } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [setBooking]);

    useEffect(() => {
        fetch(`http://localhost:5000/places`)
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [setPlaces]);


    return (
        <div>
            <h1>My Booking</h1>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-4">

                    {
                        booking.map(book => <Booked key={book._id} book={book} places={places} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Booking;