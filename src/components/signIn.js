import React, { useState } from "react";
import '../styles/signIn.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LinkRouter, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { useDispatch } from "react-redux";
import { signInUser } from "../redux/actions/userActions";
import { signInService } from "../service/userService"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

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
                signInService({ formData }).then((response) => {
                    if (response.data.success === true) {
                        dispatch(
                            signInUser({
                                user: {
                                    fullName: response.data.response.fullName,
                                    email: response.data.response.email,
                                    id: response.data.response.id,
                                },
                                message: response.data.message,
                                success: response.data.success,
                                from: response.data.from
                            })
                        );
                        alert(response.data.message)
                        navigate('/reservations');
                    } else {
                        const messages = response.data.message;

                        if (Array.isArray(messages)) {
                            var concatenatedMessages = messages.map(function (item) {
                                return item.message;
                            }).join("\n");
                            alert(concatenatedMessages);
                        } else {
                            alert(messages);
                        }
                    }
                }).catch((error) => {
                    console.error("Error:");
                });
            } catch (error) {
                console.error('Error en la solicitud:');
            }
        }
    };

    const handleChange = (e) => {
        const aux = { ...formDataSignIn }
        aux[e.target.name] = e.target.value
        setFormData(aux);
    }

    const googleSubmit = (event) => {
        const token = event.credential;
        const decoded = jwtDecode(token);

        const formData = {
            email: decoded.email,
            password: decoded.jti,
            from: "google",
            application: "medic api"
        };

        try {
            signInService({ formData }).then((response) => {
                if (response.data.success === true) {
                    dispatch(
                        signInUser({
                            user: {
                                fullName: response.data.response.fullName,
                                email: response.data.response.email,
                                id: response.data.response.id,
                            },
                            message: response.data.message,
                            success: response.data.success,
                            from: response.data.from
                        })
                    );
                    alert(response.data.message)
                    navigate('/reservations');
                } else {
                    alert(response.data.message)
                }
            }).catch((error) => {
                console.error("Error:", error);
            });
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

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
                        sx={{ m: '2rem', cursor: 'pointer' }}
                    >
                        Forgot password?
                    </Typography>
                </LinkRouter>
                <GoogleLogin
                    onSuccess={googleSubmit}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />;
            </Box>
        </Box>
    );
}

export default SignIn;
