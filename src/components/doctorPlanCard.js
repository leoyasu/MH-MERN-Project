import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import '../styles/doctorPlanDetails.css';
import Grid from '@mui/material/Grid';


function DoctorPlanCard({ plan }) {
    return (
        <Box
            sx={{
                width: '400px',
                minWidth:'300px',
                minHeight: '300px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid'
            }}
        >
            <Grid container spacing={1} sx={{ width: 'inherit', m: '1rem' }}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', color: 'black' , m: '1rem'}}>
                    Plan Name: {plan.name}
                </Typography>
                <Typography variant="subtitle1"  style={{ fontFamily: 'Open Sans', color: 'black',textAlign: 'justify', m: '1rem' }}>
                    Plan Description: {plan.description}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', color: 'black', m: '1rem' }}>
                    Plan cost: {plan.planCost}
                </Typography>
            </Grid>
        </Box>
    )
}

export default DoctorPlanCard;
