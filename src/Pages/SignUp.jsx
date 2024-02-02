import React from 'react'
import { Image, NumberInput, Group, Select, Flex, Mark, Grid, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import logo from "/favCami.svg"
import { useNavigate } from 'react-router-dom';

function SignUp() {


    const navigate = useNavigate();

    const handleButtonClick = () => {

        navigate('/Password Reset');
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
                        placeholder="TLY00XY000"
                    />
                    <TextInput
                        my={10}
                        label="Name"
                        placeholder=""
                    />

                    <Flex gap={'sm'} my={10}>
                        <Select
                           
                            label="Department"
                            placeholder="Choose Department"
                            data={['IT', 'CS', 'EC', 'EEE']}

                        />
                        <NumberInput
                           
                            label="Admission Year"
                            placeholder="Year"
                            min={2020}
                            max={2090}
                        />
                    </Flex>

                    <TextInput
                        mt={10}
                        label="Email Address"
                        placeholder=""
                        type='email'
                    />

                    <PasswordInput
                        mt={10}
                        label="Create Password"
                        placeholder=""
                    />
                    <Button mt={20} color='blue' radius="md" size='md' fullWidth onClick={handleButtonClick}> Create Account  </Button>
                    <Text ta="center" mt={10} c="dimmed">Already have an account? Sign In</Text>
                </Box>
            </Flex>

        </div>
    )
}

export default SignUp