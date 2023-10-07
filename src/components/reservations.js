
import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import '../styles/reservations.css';
import DoctorCard from "./doctorCard";
import { GetDoctors } from "../service/doctorService";

function Reservations() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        GetDoctors()
            .then((doctorData) => setDoctors(doctorData))
            .catch((error) => console.error("Error setting doctors:", error));
    }, []);

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


                    <Grid container spacing={2} sx={{ width: 'inherit', m: '1rem' }}>
                        {doctors.map((doctor, index) => (
                            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
                                <DoctorCard doctor={doctor} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Reservations;