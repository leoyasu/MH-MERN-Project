import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import avatar from '../images/avatar.jpg'
import Typography from '@mui/material/Typography';

function DoctorCard() {
    return (
        <>
            <Card sx={{ maxWidth: 345,  bgcolor: 'lightblue', border: 1 }}>
                <CardMedia
                    component="img"
                    alt="avatar"
                    height="200"
                    image={avatar}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        John Smith, MD.
                    </Typography>
                    <Typography variant="body2" color="text.secondary" style={{ fontFamily: 'Open Sans', textAlign: 'justify' }}>
                        Expert Pediatric Care: Trust our dedicated pediatrician for
                        compassionate and comprehensive care for your child's health
                        and well-being. We prioritize your little one's health journey
                        with personalized attention and expertise.
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