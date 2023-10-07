import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';

function DoctorDetails() {
    const location = useLocation();
    const { name, lastName, specialty, description, license, meetCost } = location.state || {};

    if (!name) {

        return <div>No doctor data available.</div>;
    }

    return (
        <>
            <Box className="doctorDetailsBox"
                sx={{
                    width: '100vw',
                    height: '1000px',
                    display: 'flex',
                    justifyContent: 'center',
                    bgcolor: 'grey',
                    opacity: '0.9'
                }}>
                <div>
                    <div>
                        <Typography variant="h6" sx={{ fontFamily: 'Open Sans', mt: '1rem', textAlign: 'center', color: '#000080' }}>
                            Name: {name} <br />
                            Last name: {lastName} <br />
                            Specialty: {specialty} <br />
                            Description: {description} <br />
                            License: {license} <br />
                            Cost: {meetCost}
                        </Typography>

                    </div>
                </div>
            </Box>
        </>
    )
}

export default DoctorDetails;