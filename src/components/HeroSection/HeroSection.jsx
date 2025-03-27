import React from 'react';
import './HeroSection.css';
import { Carousel } from 'react-bootstrap';
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
    return (
        <div className='hero-section'>
            <Carousel>
                <Carousel.Item className='carousel-item1 vh-100'>
                    <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-top'>
                        <div className='row h-100'>
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Find Your Perfect Holiday</h1>
                                <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore similique nobis laudantium ipsum iure odio hic laborum exercitationem temporibus quidem!</p>
                                <GreenBtn btnTitle='Check our holidays' btnLink='/holidays' />
                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item2 vh-100'>
                    <Carousel.Caption className='h-100'>
                        <div className='row h-100'>
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Do you need a city break?</h1>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est officia sit perspiciatis labore nam!</p>
                                <GreenBtn btnTitle='Our city breaks' btnLink='/city-brteaks' />
                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='carousel-item2 vh-100'>
                    <Carousel.Caption className='h-100'>
                        <div className='row h-100'>
                            <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                                <h1 className='text-capitalize text-start'>Travel anywhere</h1>
                                <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime est officia sit perspiciatis labore nam!</p>
                                <GreenBtn btnTitle='Check all destinations' btnLink='/destinations' />
                            </div>
                            <div className='col-lg-6 d-none d-lg-block'></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSection;