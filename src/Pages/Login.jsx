import React, { useState } from 'react';
import { Image, Flex, Title, Text, TextInput, Button, Box, Alert, Notification } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import logo from "/favCami.svg"
import Axios from 'axios';

function Login() {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();
    const [registerNumber, setRegisterNumber] = useState('');
    const [dob, setDOB] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const [error, setError] = useState(null); 

    const login = () => {
        // Check if the input fields are empty
        if (!registerNumber || !dob) {
            setError('Please fill in all fields');
            return;
        }
    
        Axios.post(`${baseUrl}/login`, {
            registerNumber: registerNumber,
            dob: dob,
        }).then((response) => {
            if (!response.data.message) {
                localStorage.setItem('studentData', JSON.stringify(response.data));
                setLoginStatus('Login successful');
                navigate('/Profile');
            } else {
                setLoginStatus('Invalid credentials');
            }
        }).catch((error) => {
            setError('Incorrect Password or DOB');
        });
    };
    
    
    const handleSignupClick = () => {
        navigate('/Signup');
    };

    return (
        <div>
            <Flex justify="center" align="center" direction="column" wrap="wrap" p={20} style={{ height: '100dvh', width: '100dvw' }}>
                <Box style={{ width: '280px' }}>

                    <Image
                        my={10}
                        h={50}
                        w="auto"
                        fit="contain"
                        src={logo}
                    />

                    <Box>

                        {/* Display Alert if error is not null */}
                        {error && (
                            <Notification mt={20} style={{position:'absolute', top:'30px', width: '280px'}} color="red" title="Error" onClose={() => setError(null)}>
                                Incorrect Password or DOB
                            </Notification>
                        )}

                         
                        <Title order={1}>Sign in</Title>
                        
                        <TextInput required mt={20} label="Register Number" placeholder="" value={registerNumber} onChange={(event) => setRegisterNumber(event.target.value)} />
                        <TextInput required my={10} mb={20} label="Date of Birth" placeholder="DD/MM/YYYY" value={dob} onChange={(event) => setDOB(event.target.value)} />
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
