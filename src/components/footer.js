import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import '../styles/navFooter.css';


function Footer() {
    return (
        <Box className="navFooter"
            component="footer"
            sx={{
                backgroundColor: '#0099fb',
                p: 0,
                pt:'5px',
                width:'100vw'
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="white" gutterBottom>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="white">
                            We are DoctorFinder company, dedicated to connect you to the best healthcare service.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="white" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="white">
                            Humboldt 2200, Palermo CABA
                        </Typography>
                        <Typography variant="body2" color="white">
                            Email: DoctorFinder@gmail.com
                        </Typography>
                        <Typography variant="body2" color="white">
                            Phone:  (+54 11) 4759 - 3560
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="rgb(255,255,255)" gutterBottom>
                            Follow Us
                        </Typography>
                        <Link href="https://www.facebook.com/" color="rgb(255,255,255)">
                            <Facebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/"
                            color="rgb(255,255,255)"
                            sx={{ pl: 1, pr: 1 }}
                        >
                            <Instagram />
                        </Link>
                        <Link href="https://www.twitter.com/" color="rgb(255,255,255)">
                            <Twitter />
                        </Link>
                    </Grid>
                </Grid>
                <Box mt={1}>
                    <Typography variant="body2" color="white" align="center">
                        {"Copyright © "}
                        <Link color="rgb(255,255,255)" href="#">
                            DoctorFinder
                        </Link>{" "}
                        {new Date().getFullYear()}
                        {"."}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;