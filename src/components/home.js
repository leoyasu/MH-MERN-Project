import React from "react";
import MainSwiper from './swiper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';

function Home() {

    return(
        <>
        <div className="sw swiper_main_1" style={{ backgroundImage: `url("/main_swiper_1.jpeg")` }}>
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Choose from the best healthcare providers</Typography>
          <Typography className="intro_main" variant="body1" style={{ fontFamily: 'Open Sans' }}>
            DoctorFinder offers a wide range of medical services so you can find the right doctor for your needs.
            Our platform allows you to search, compare and book virtual medical appointments conveniently and securely.
          </Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}> Make your appointment now! </Typography>
          <LinkRouter className='reservation_link' to='/reservations'>
            <Button variant="contained" style={{ fontFamily: 'Open Sans' }}>BOOK</Button>
          </LinkRouter>
        </div>
        <MainSwiper />
        </>
    )
}

export default Home;