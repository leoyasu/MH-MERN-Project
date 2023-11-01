import React, { useState } from "react";
import '../styles/signUp.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function SignUp() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert("Complete los campos")
        } else {

        }
    };

    const handleChange = (e) => {
        const aux = { ...formData }
        aux[e.target.name] = e.target.value
        setFormData(aux);
    }

    return (
        <Box className="signUpBox"
            sx={{
                width: '100vw',
                minHeight: '80vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '5rem',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#e6e6e6',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '2rem',
                    border: 1
                }}
            >
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
                    <TextField
                        id="firstName"
                        label="firstName"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        onChange={handleChange}
                    />
                    <TextField
                        id="lastName"
                        label="lastName"
                        name="lastName"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        onChange={handleChange}
                    />
                    <TextField
                        id="email"
                        label="Email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        required
                        margin="normal"
                        onChange={handleChange}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: '1rem' }}>
                        Sign Up
                    </Button>
                </form>
                <LinkRouter
                    to={{
                        pathname: '/signIn',
                    }}
                >
                    <Typography
                        underline="always"
                        sx={{ mt: '2rem', cursor: 'pointer' }}
                    >
                        Already got an account? Log in
                    </Typography>
                </LinkRouter>
            </Box>
        </Box>
    );
}

export default SignUp;
