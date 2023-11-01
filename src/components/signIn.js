import React, { useState } from "react";
import '../styles/signIn.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link as LinkRouter } from 'react-router-dom';
import Typography from '@mui/material/Typography';

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formData.email || !formData.password){
            alert("Complete los campos")
        } else {
            // axios.post("http://localhost:5000/api/users/Auth/signIn",formData).then(
            //     res => console.log(res)
            // ).catch(err => err)
        }
    };

    const handleChange = (e) => {
        const aux = {...formData}
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
                    border:1
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
                    <Button type="submit" variant="contained" sx={{ mt: '2rem'}} fullWidth>
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
