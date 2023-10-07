import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import avatar from '../images/avatar.jpg'
import Typography from '@mui/material/Typography';

function DoctorCard({ doctor }) {
    return (
        <>
            <Card sx={{ maxWidth: 345,  bgcolor: 'lightblue', border: 1 }}>
                <CardMedia
                    component="img"
                    alt="avatar"
                    height="200"
                    image={avatar}
                />
                <CardContent sx={{
                    height: '150px'
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                    {doctor.name} {doctor.lastName}, MD.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Open Sans', textAlign: 'justify' }}>
                    {doctor.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Details</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default DoctorCard