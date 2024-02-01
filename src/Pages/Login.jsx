import React from 'react'
import { Image, Flex, Mark, Title, Text, TextInput, Button, PasswordInput, Box } from '@mantine/core';
import Addresspana from "../Assets/Address-pana.svg"
import logo from "../Assets/favCami.svg"
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
       
        navigate('/Signup');
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
                <Box style={{ width: "350px" }}>
                    {/* <Image
                        radius="md"
                        h={250}
                        w="auto"
                        fit="contain"
                        src={Addresspana}
                    /> */}
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
                            label="email"
                            placeholder=""
                            type='email'
                        />
                        <PasswordInput
                            my={10}
                            mb={20}
                            label="Password"
                            placeholder=""
                        />
                        <Button color='blue' radius="md" size='md' fullWidth onClick={handleButtonClick}> Sign in  </Button>
                        <Text ta="center" mt={10} c="dimmed">Dont have an account? Sign up</Text>
                        <Text ta="center" mt={10} c="dimmed">Forgot password</Text>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Login