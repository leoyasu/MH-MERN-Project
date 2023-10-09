import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import CardMedia from '@mui/material/CardMedia';
import '../styles/doctorDetails.css';
import avatar from '../images/avatar.jpg';

function DoctorDetails() {
    const location = useLocation();
    const { name, lastName, specialty, description, license, meetCost } = location.state || {};

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
                opacity: '0.9',
                pd: '5rem',
            }}
        >
            <Box
                sx={{
                    maxWidth: '800px',
                    minWidth: '300px',
                    minHeight: '500px',
                    width: '100%',
                    backgroundColor: 'white',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    maxHeight: '60vh',
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
                <Typography variant="h4" sx={{ fontFamily: 'Open Sans', mt: '1rem' }}>
                    {name} {lastName}, MD.
                </Typography>
                <Typography variant="h5" sx={{ fontFamily: 'Open Sans' }}>
                    Specialty: {specialty}
                </Typography>
                <Typography variant="h6" sx={{ fontFamily: 'Open Sans', textAlign: 'justify', p: '1rem' }}>
                    {description}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', mb: '1rem' }}>
                    License: {license}
                </Typography>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Open Sans', mb: '1rem' }}>
                    Cost: $ {meetCost}
                </Typography>
            </Box>
        </Box>
    )
}

export default DoctorDetails;





// import React, { useEffect } from "react";
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { useLocation } from 'react-router-dom';
// import '../styles/doctorDetails.css';

// function DoctorDetails() {
//     const location = useLocation();
//     const { name, lastName, specialty, description, license, meetCost } = location.state || {};

//      useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);

//     if (!name) {

//         return <div>No doctor data available.</div>;
//     }

//     return (
//         <>
//             <Box className="doctorDetailsBox"
//                 sx={{
//                     width: '100vw',
//                     height: '100vh',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     bgcolor: 'grey',
//                     opacity: '0.9'
//                 }}
//                 style={{ backgroundImage: `url("/main_swiper_1.jpeg")` }}>
//                 <div>
//                     <div>
//                         <Typography variant="h6" sx={{ fontFamily: 'Open Sans', mt: '1rem', textAlign: 'center', color: '#000080' }}>
//                             Name: {name} <br />
//                             Last name: {lastName} <br />
//                             Specialty: {specialty} <br />
//                             Description: {description} <br />
//                             License: {license} <br />
//                             Cost: {meetCost}
//                         </Typography>

//                     </div>
//                 </div>
//             </Box>
//         </>
//     )
// }

// export default DoctorDetails;