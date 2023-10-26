import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DoctorPlanCard from "./doctorPlanCard";
import { useLocation } from 'react-router-dom';
import '../styles/doctorPlans.css';
import Typography from '@mui/material/Typography';

function DoctorPlans() {
    const location = useLocation();
    const { plans } = location.state || {};

    return (
        <Box className="doctorPlanBox"
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
                    minWidth: '500px',
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
                }}
            >
                <Typography variant="h5" sx={{ fontFamily: 'Open Sans', color: 'black',mt:'3rem' }}>
                    Select the perfect plan that aligns with your needs and preferences
                </Typography>
                <Grid
                    container
                    spacing={1}
                    sx={{
                        width: '100%',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        mt:'2rem',
                        mb:'2rem' 
                    }}
                >
                    {plans.map((plan, index) => (
                        <Grid item key={index}>
                            <DoctorPlanCard plan={plan} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}

export default DoctorPlans;
