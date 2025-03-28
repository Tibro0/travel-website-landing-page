import React from 'react';
import './FavouritesSection.css';
import { Container } from 'react-bootstrap';

function FavouritesSection() {
  return (
    <div className='favourites-section my-4 my-sm-5'>
      <Container>
        <h3 className='text-start text-uppercase fw-semibold mb-4 mb-sm-5'>Your Favourites</h3>
        <div className='row g-4'>
          <div className='col-sm-6 col-lg-3'>
            <div className='spa-div img-hover d-flex align-items-end justify-content-center rounded'>
              <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Spa</h4>
            </div>
          </div>

          <div className='col-sm-6 col-lg-3'>
            <div className='pool-div img-hover d-flex align-items-end justify-content-center rounded'>
              <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Pool</h4>
            </div>
          </div>

          <div className='col-sm-6 col-lg-3'>
            <div className='pet-friendly-div img-hover d-flex align-items-end justify-content-center rounded'>
              <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Pet Friendly</h4>
            </div>
          </div>

          <div className='col-sm-6 col-lg-3'>
            <div className='all-inclusive-div img-hover d-flex align-items-end justify-content-center rounded'>
              <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>All Inclusive</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default FavouritesSection;