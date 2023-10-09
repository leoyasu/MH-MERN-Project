import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import avatar from '../images/avatar.jpg'
import Typography from '@mui/material/Typography';
import { Link as LinkRouter } from 'react-router-dom';


function DoctorCard({ doctor }) {
    return (
        <>
            <Card sx={{ maxWidth: 345,minWidth:345, bgcolor: 'lightblue', border: 1 }}>
                <CardMedia
                    component="img"
                    alt="avatar"
                    height="200"
                    image={avatar}
                />
                <CardContent sx={{
                    height: '170px'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        {doctor.name} {doctor.lastName}, MD.
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {doctor.specialty}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Open Sans', textAlign: 'justify' }}>
                        {doctor.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <LinkRouter
                        className='reservation_link'
                        to={{
                            pathname: '/doctorDetails',
                        }}
                        state= {{name: doctor.name,
                            lastName: doctor.lastName,
                            specialty: doctor.specialty,
                            description: doctor.description,
                            license: doctor.license,
                            meetCost: doctor.meetCost,}}

                    >
                        <Button size="small" sx={{mt:'2rem'}}>Details</Button>
                    </LinkRouter>
                </CardActions>
            </Card>
        </>
    )
}

export default DoctorCard