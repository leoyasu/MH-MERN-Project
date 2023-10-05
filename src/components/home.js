import React from "react";
import MainSwiper1 from './mainSwiper1'
import MainSwiper2 from './mainSwiper2'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link as LinkRouter } from 'react-router-dom';



function Home() {
  
  return (
    <>
      <div className="CTA_main_back" style={{ backgroundImage: `url("/main_swiper_1.jpeg")` }}>
        <div className="CTA_main">
          <Typography variant="h3" style={{ fontFamily: 'Open Sans' }}> Choose from the best healthcare providers</Typography>
          <Typography className="intro_main" variant="body1" style={{ fontFamily: 'Open Sans' }}>
            DoctorFinder offers a wide range of medical services so you can find the right doctor for your needs.
            Our platform allows you to search, compare and book virtual medical appointments conveniently and securely.
          </Typography>
          <Typography variant="h5" style={{ fontFamily: 'Open Sans' }}> Make your appointment! </Typography>
          <LinkRouter className='reservation_link' to='/reservations'>
            <Button variant="contained" style={{ fontFamily: 'Open Sans' }}>BOOK NOW!</Button>
          </LinkRouter>
        </div>
      </div>
      <Box sx={{ flexGrow: 1,border: 1, width: '100vw' }}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6}>
            <MainSwiper1 />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <MainSwiper2 />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home;