import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import '../styles/doctorDetails.css';


function DoctorDetails() {
    const location = useLocation();
    const {license} = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!license) {
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
                <Box>
                    <Typography variant="h4" sx={{ fontFamily: 'Open Sans', mt: '1rem', color: 'black' }}>
                    License: {license}
                    </Typography>
                    <Typography variant="h6" sx={{ fontFamily: 'Open Sans', textAlign: 'justify', p: '1rem', color: 'black' }}>
                        "doctor plans"
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default DoctorDetails;

