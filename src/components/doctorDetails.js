import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import '../styles/doctorDetails.css';
import Grid from '@mui/material/Grid';
import avatar from '../images/avatar.jpg';
import { Link as LinkRouter } from 'react-router-dom';
import Button from '@mui/material/Button';

function DoctorDetails() {
    const location = useLocation();
    const { name, lastName, specialty, description, license, meetCost, plans } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!name) {
        return <div>No doctor data available.</div>;
    }

    return (
        <Box className="doctorDetailsBox"
            sx={{
                width: '100vw',
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: '5rem',
            }}
        >
            <Box
                sx={{
                    maxWidth: '800px',
                    minWidth: '300px',
                    minHeight: '550px',
                    width: '100%',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    bgcolor: 'primary.main',
                    border: 1,
                    p: '1rem',
                }}
            >
                <CardMedia
                    component="img"
                    alt={`${name} ${lastName}`}
                    height="200"
                    image={avatar}
                    sx={{
                        width: '100%',
                        objectFit: 'cover',
                    }}
                />

                <Box>
                    <Typography variant="h4" sx={{ fontFamily: 'Open Sans', mt: '1rem', color: 'black' }}>
                        {name} {lastName}, MD.
                    </Typography>
                    <Typography variant="h5" sx={{ fontFamily: 'Open Sans', mt: '1rem', color: 'black' }}>
                        Specialty: {specialty}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Open Sans', textAlign: 'justify', p: '1rem', color: 'black' }}>
                        {description}
                    </Typography>
                    <Grid container spacing={2} sx={{ width: 'inherit', m: '1rem' }}>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '0 !important', pl: '0 !important' }}>
                            <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', color: 'black' }}>
                                License: {license}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '0 !important', pl: '0 !important' }}>
                            <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', color: 'black' }}>
                                Cost: $ {meetCost}
                            </Typography>
                        </Grid>
                        <Grid className="container_plan" item xs={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: 2, pt: '0 !important', pl: '0 !important', p: '1rem !important' }}>
                            {/* <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', color: 'black' }}>
                                Plans
                            </Typography> */}
                            <LinkRouter
                                className='doctor_plan_link'
                                to={{
                                    pathname: '/doctorPlans',
                                }}
                                state={{
                                    plans: plans,
                                }}
                            >
                                <Button size="medium" sx={{fontFamily: 'Open Sans', color: 'black' }}>Plan Details</Button>
                            </LinkRouter>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default DoctorDetails;
