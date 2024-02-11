import React from 'react'
import { Image, Flex, Mark, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import logo from "/favCami.svg"
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/Profile');
    };
    const handleSignuoClick = () => {
        navigate('/Signup');
    };
    const handleForgotPasswordClick = () => {
        navigate('/Password Reset');
    };

    return (
        <div>

            <Flex justify="center"
                align="center"
                direction="column"
                wrap="wrap"
                p={20}
                style={{ height: '100dvh', width: '100dwh' }}
            >
                <Box style={{ width: "280px" }}>
                   
                    <Box>
                        <Image
                            my={10}
                            radius="md"
                            h={50}
                            w="auto"
                            fit="contain"
                            src={logo}
                        />
                        <Title order={1}> Sign in </Title>
                        <TextInput
                            mt={20}
                            label="Register Number"
                            placeholder=""
                            
                        />
                        <TextInput
                            my={10}
                            mb={20}
                            label="Date of Birth"
                            placeholder="DD/MM/YYYY"
                        />
                        <Button color='blue'  radius="md" size='md' fullWidth onClick={handleLoginClick}> Sign in  </Button>
                        <Text ta="center" mt={10} c="dimmed" style={{cursor:"pointer"}} onClick={handleSignuoClick}>Dont have an account? Sign up</Text>
                        {/* <Text ta="center" mt={10} c="dimmed" style={{cursor:"pointer"}} onClick={handleForgotPasswordClick}>Forgot password</Text> */}
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Login