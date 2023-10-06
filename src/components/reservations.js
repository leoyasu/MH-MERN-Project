
import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../styles/reservations.css';
import DoctorCard from "./doctorCard";

function Reservations() {
    return (
        <>
            <Box className="reservationsBox"
                sx={{
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div>
                    <div>
                        <Typography variant="h3" sx={{
                            fontFamily: 'Open Sans',
                            mt: '1rem',
                            textAlign: 'center',
                            color: '#000080'
                        }}>
                            We care about your health
                        </Typography>
                        <Typography variant="h4" sx={{
                            fontFamily: 'Open Sans',
                            mt: '1rem',
                            textAlign: 'center',
                            color: '#000080'
                        }}>
                            Get to know our professionals and specialties
                        </Typography>
                    </div>


                    <Grid container spacing={2} sx={{width:'inherit', m:'1rem'}}>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                        <Grid item xs={3}>
                            <DoctorCard />
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Reservations;