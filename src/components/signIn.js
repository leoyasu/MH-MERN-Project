import React, { useState } from "react";
import '../styles/signIn.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/actions/userActions";

function SignIn() {
    const navigate = useNavigate()
    const [formDataSignIn, setFormData] = useState({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formDataSignIn.email || !formDataSignIn.password) {
            alert("Complete los campos")
        } else {
            const formData = {
                email: formDataSignIn.email,
                password: formDataSignIn.password,
                from: "sign-up-form",
                application: "medic api"
            };
            try {
                const response = await axios.post('http://localhost:5000/api/users/Auth/signIn', { formData });
                console.log(response)
                if (response.status === 200) {
                    dispatch(signInUser(formData))
                    navigate('/reservations')
                }
            } catch (error) {
                console.error('Error en la solicitud');
            }
        }
    };

    const handleChange = (e) => {
        const aux = { ...formDataSignIn }
        aux[e.target.name] = e.target.value
        setFormData(aux);
    }

    return (
        <Box className="signInBox"
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
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
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
                    <Button type="submit" variant="contained" sx={{ mt: '2rem' }} fullWidth>
                        Sign In
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
                        Forgot password?
                    </Typography>
                </LinkRouter>
            </Box>
        </Box>
    );
}

export default SignIn;
