import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomeBanner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.viewholidaytrip.com/holiday-tour/images/international-dream-destinations.jpg"
                    alt="First slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="http://timetravelers.com.pk/wp-content/uploads/2020/09/domestic-banner.jpg"
                    alt="Second slide"
                    height="350px"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://joile.in/upload/JayveerBanner2.jpg"
                    alt="Third slide"
                    height="350px"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default HomeBanner;