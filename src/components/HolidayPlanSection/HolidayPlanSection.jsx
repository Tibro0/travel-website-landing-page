import React from 'react';
import './HolidayPlanSection.css';
import { Container } from 'react-bootstrap';
import GreenBtn from '../GreenBtn/GreenBtn';

function HolidayPlanSection(props) {
  return (
    <div className='holiday-plan-section py-5'>
        <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
            <h3 className='text-start text-light text-capitalize fw-semibold'>{props.itemHolidayPlanTitle}</h3>
            <p className='text-start text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ea consectetur, rerum cumque quaerat itaque.</p>
            <GreenBtn btnTitle='Check Summer Deals' />
        </Container>
    </div>
  )
}

export default HolidayPlanSection;