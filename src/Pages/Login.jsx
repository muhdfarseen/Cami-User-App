import React, { useState } from 'react';
import { Image, Flex, Title, Text, TextInput, Button, Box } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
    const navigate = useNavigate();
    const [registerNumber, setRegisterNumber] = useState('');
    const [dob, setDOB] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const login = () => {
        Axios.post("http://localhost:3000/login", {
            registerNumber: registerNumber,
            dob: dob,
        }).then((response) => {
            if (!response.data.message) {
                // Store all student data in localStorage
                localStorage.setItem('studentData', JSON.stringify(response.data));
                
                setLoginStatus('Login successful');
                navigate('/Profile');
            } else {
                setLoginStatus('Invalid credentials');
            }
        }).catch((error) => {
            console.error('Error logging in:', error);
        });
    };
    

    const handleSignupClick = () => {
        navigate('/Signup');
    };

    return (
        <div>
            <Flex justify="center" align="center" direction="column" wrap="wrap" p={20} style={{ height: '100vh', width: '100vw' }}>
                <Box style={{ width: '280px' }}>
                    <Box>
                        <Title order={1}>Sign in</Title>
                        <TextInput mt={20} label="Register Number" placeholder="" value={registerNumber} onChange={(event) => setRegisterNumber(event.target.value)} />
                        <TextInput my={10} mb={20} label="Date of Birth" placeholder="DD/MM/YYYY" value={dob} onChange={(event) => setDOB(event.target.value)} />
                        <Button color="blue" radius="md" size="md" fullWidth onClick={login}>
                            Sign in
                        </Button>
                        <Text ta="center" mt={10} c="dimmed" style={{ cursor: 'pointer' }} onClick={handleSignupClick}>
                            Don't have an account? Sign up
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </div>
    );
}

export default Login;
