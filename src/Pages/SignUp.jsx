import React, { useState } from 'react';
import { Image, NumberInput, Group, Select, Flex, Mark, Grid, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import logo from "/favCami.svg"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {

    const baseUrl = import.meta.env.VITE_BASE_URL;

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeDepartment = (value) => {
        setFormData({ ...formData, department: value });
    };

    const handleChangeAdmissionYear = (value) => {
        setFormData({ ...formData, admission_year: value });
    };




    const [formData, setFormData] = useState({
        register_number: '',
        email_id: '',
        full_name: '',
        department: '',
        admission_year: '',
        dob: ''
    });



    const handleCreateAccClick = () => {
        // Check if the admission year field is empty or not a number
        if (formData.admission_year === '' || isNaN(formData.admission_year)) {
            console.error('Admission year must be a valid number');
            return;
        }
    
        axios.post(`${baseUrl}/register`, formData)
            .then(response => {
                console.log(response.data);
                navigate('/');
            })
            .catch(error => {
                console.error('Error registering user:', error);
            });
    };
    


    const handleSignInClick = () => {
        navigate('/');
    };


    return (
        <div>
            <Flex
                justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                p={20}
                style={{ height: '100dvh', width: '100dwh' }}
            >
                <Box style={{ width: "280px" }}>
                    <Image
                        my={10}
                        radius="md"
                        h={50}
                        w="auto"
                        fit="contain"
                        src={logo}
                    />
                    <Title order={1}> Sign Up </Title>
                    <TextInput
                        mt={20}
                        label="Register Number"
                        placeholder=""
                        onChange={(e) => handleInputChange(e)}
                        name="register_number"
                        value={formData.register_number}
                    />
                    <TextInput
                        my={10}
                        label="Name"
                        placeholder=""
                        onChange={(e) => handleInputChange(e)}
                        name="full_name"
                        value={formData.full_name}
                    />

                    <Flex gap={'sm'} my={10}>
                        <Select
                            label="Department"
                            placeholder="Choose Department"
                            data={['IT', 'CS', 'EC', 'EEE']}
                            onChange={handleChangeDepartment}
                            value={formData.department}
                        />
                        <NumberInput
                            label="Admission Year"
                            placeholder="Year"
                            min={2020}
                            max={2090}
                            onChange={handleChangeAdmissionYear}
                            value={formData.admission_year}
                        />

                    </Flex>

                    <TextInput
                        mt={10}
                        label="Email Address"
                        placeholder=""
                        type='email'
                        onChange={(e) => handleInputChange(e)}
                        name="email_id"
                        value={formData.email_id}
                    />

                    <TextInput
                        mt={10}
                        label="Date of Birth"
                        placeholder="DD/MM/YYYY"
                        onChange={(e) => handleInputChange(e)}
                        name="dob"
                        value={formData.dob}
                    />

                    <Button mt={20} color='blue' radius="md" size='md' fullWidth onClick={handleCreateAccClick}> Create Account  </Button>
                    <Text ta="center" style={{ cursor: "pointer" }} mt={10} c="dimmed" onClick={handleSignInClick}>Already have an account? Sign In</Text>
                </Box>
            </Flex>

        </div>
    )
}

export default SignUp