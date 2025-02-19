import React from 'react';

function Hero() {
  return (
    <section className='hero-section text-center mt-5'>
      <div className='d-flex flex-column align-items-center text-center mb-3'>
        <button className='btn btn-success mx-2 mb-2 text-white' aria-label='Infographic Design Button'>
          Infographic Design
        </button>
        <p className='text-muted text-center col-10 px-2'>
          Discover the power of visual communication with our custom infographic design services.
           We help businesses effectively convey complex information through engaging and easy-to-understand visuals. 
              </p>
      </div>
    </section>
  );
}

export default Hero;
